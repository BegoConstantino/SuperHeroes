import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperHero } from '@core/models';
import { HeroesActions, LoadingActions } from '@core/rxjs';
import { Store } from '@ngrx/store';
import { Observable, catchError, filter, map, of, tap, throwError } from 'rxjs';

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

	getSuperHeroById(id: number): Observable<SuperHero> {
		return of(this.superheroes.find((hero) => hero.id === id)).pipe(
			map((hero) => {
				if (hero) {
					return hero; // Retorna el héroe si se encuentra
				} else {
					throw new Error(`No se encontró ningún superhéroe con el ID ${id}`);
				}
			}),
			catchError((error) => throwError(error)),
		);
	}

	getSuperHeroesByName(keyword: string) {
		const newList: SuperHero[] =
			!keyword || keyword.length < 3
				? this.superheroes
				: this.superheroes.filter(
						(hero) => hero.name.toUpperCase().includes(keyword.toUpperCase()) || hero.heroName.toUpperCase().includes(keyword.toUpperCase()),
				  );
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
