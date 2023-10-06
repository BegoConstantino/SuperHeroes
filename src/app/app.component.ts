import { Component, HostListener, OnInit } from '@angular/core';
import { LoadingActions, LoadingSelectors } from '@core/rxjs';
import { HeroesService } from '@core/services/heroes.service';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'superheroes';
	loadingApp$ = this.store.select(LoadingSelectors.selectIsLoading);

	@HostListener('window:load', ['$event'])
	onLoad() {
		this.store.dispatch(LoadingActions.setIsLoading({ loading: false }));
	}

	constructor(private readonly store: Store, private heroesService: HeroesService) {}

	ngOnInit(): void {
		this.heroesService.getAllSuperHeroes();
	}
}
