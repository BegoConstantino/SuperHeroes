import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewSuperHero, SuperHero } from '@core/models';
import { HeroesActions, LoadingActions } from '@core/rxjs';
import { Store } from '@ngrx/store';
import { MainRoutes } from '@shared/constants';
import { filter, tap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HeroesService {
	private superheroes: SuperHero[] = [];

	constructor(
		private readonly store: Store,
		private readonly http: HttpClient,
		private router: Router,
	) {}

	getAllSuperHeroes(): void {
		this.http
			.get<SuperHero[]>('./assets/mock/heroes.mock.json')
			.pipe(
				filter((response) => !!response),
				tap((response) => {
					this.superheroes = response;
					this.store.dispatch(HeroesActions.setList({ value: response }));
				}),
				tap(() => this.store.dispatch(LoadingActions.setIsLoading({ loading: false }))),
			)
			.subscribe();
	}

	public getSuperHeroById(id: number) {
		if (!this.superheroes.length) {
			this.router.navigate([MainRoutes.LIST]);
			return;
		}
		return this.superheroes.find((hero) => hero.id === id);
	}

	public getSuperHeroesByName(keyword: string) {
		const newList: SuperHero[] =
			!keyword || keyword.length < 3
				? this.superheroes
				: this.superheroes.filter(
						(hero) => hero.name.toUpperCase().includes(keyword.toUpperCase()) || hero.heroName.toUpperCase().includes(keyword.toUpperCase()),
				  );
		this.store.dispatch(HeroesActions.setList({ value: newList }));
	}

	public updateSuperHero(hero: SuperHero) {
		const index = this.superheroes.findIndex((h) => h.id === hero.id);
		if (index !== -1) {
			const superheroes = [...this.superheroes];
			superheroes[index] = hero;
			this.superheroes = superheroes;
			this.store.dispatch(HeroesActions.setList({ value: this.superheroes }));
		}
	}

	public deleteSuperHero(id: number) {
		const index = this.superheroes.findIndex((h) => h.id === id);
		if (index !== -1) {
			this.superheroes = [...this.superheroes.slice(0, index), ...this.superheroes.slice(index + 1)];
			this.store.dispatch(HeroesActions.setList({ value: this.superheroes }));
		}
	}

	public addSuperHero(values: NewSuperHero) {
		const newSuperHero: SuperHero = {
			...values,
			id: this.getNewId(),
			creationDate: new Date(),
		};
		this.superheroes = [...this.superheroes, newSuperHero];
		this.store.dispatch(HeroesActions.setList({ value: this.superheroes }));
	}

	private getNewId() {
		if (this.superheroes.length === 0) {
			return 1;
		}
		return this.superheroes.reduce((maxId, hero) => {
			return (hero.id > maxId ? hero.id : maxId) + 1;
		}, this.superheroes[1].id);
	}
}
