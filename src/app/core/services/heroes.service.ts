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
	) {
		this.store.select(HeroesSelectors.getList).subscribe((data) => (this.superheroes = data));
	}

	getAllSuperHeroes(): Observable<SuperHero[]> {
		return this.http.get<SuperHero[]>('./assets/mock/heroes.mock.json').pipe(
			filter((response) => !!response),
			tap((response) => this.store.dispatch(HeroesActions.setList({ value: response }))),
			tap(() => this.store.dispatch(LoadingActions.setIsLoading({ loading: false }))),
		);
	}

	getSuperHeroById(id: number): Observable<SuperHero | undefined> {
		return of(this.superheroes.find((hero) => hero.id === id));
	}

	getSuperHeroesByName(keyword: string): Observable<SuperHero[]> {
		const filteredHeroes = this.superheroes.filter((hero) => hero.name.toLowerCase().includes(keyword.toLowerCase()));
		return of(filteredHeroes);
	}

	updateSuperHero(hero: SuperHero): Observable<void> {
		const index = this.superheroes.findIndex((h) => h.id === hero.id);
		if (index !== -1) {
			this.store.dispatch(HeroesActions.updateHero({ index, value: hero }));
		}
		return of();
	}

	deleteSuperHero(id: number): Observable<void> {
		const index = this.superheroes.findIndex((h) => h.id === id);
		if (index !== -1) {
			this.store.dispatch(HeroesActions.deleteHero({ index }));
		}
		return of();
	}
}
