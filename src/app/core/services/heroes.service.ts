import { Injectable } from '@angular/core';
import { SuperHero } from '@core/models';
import { Observable, filter, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { HeroesActions, HeroesSelectors, LoadingActions } from '@core/rxjs';

@Injectable({
	providedIn: 'root',
})
export class HeroesService {
	superheroes!: SuperHero[];
	constructor(
		private readonly store: Store,
		private readonly http: HttpClient,
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

	getSuperHeroById(id: number): Observable<SuperHero | undefined> {
		return of(this.superheroes.find((hero) => hero.id === id));
	}

	getSuperHeroesByName(keyword: string) {
		const newList: SuperHero[] = this.superheroes.filter((hero) => hero.name.toLowerCase().includes(keyword.toLowerCase()));
		this.store.dispatch(HeroesActions.setList({ value: newList }));
	}

	updateSuperHero(hero: SuperHero) {
		const index = this.superheroes.findIndex((h) => h.id === hero.id);
		if (index !== -1) {
			this.superheroes[index] = hero;
			this.store.dispatch(HeroesActions.setList({ value: this.superheroes }));
		}
	}

	deleteSuperHero(id: number) {
		const index = this.superheroes.findIndex((h) => h.id === id);
		if (index !== -1) {
			this.superheroes.splice(index, 1);
			this.store.dispatch(HeroesActions.setList({ value: this.superheroes }));
		}
	}
}
