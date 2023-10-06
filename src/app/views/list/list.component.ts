import { Component } from '@angular/core';
import { HeroesSelectors } from '@core/rxjs';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent {
	heroesList$ = this.store.select(HeroesSelectors.getList);

	constructor(private readonly store: Store) {}
}
