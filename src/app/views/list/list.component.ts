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
	pageSize = 6;
	currentPage: number = 0;

	constructor(private readonly store: Store) {}

	changePage(pageIndex: number): void {
    this.currentPage = pageIndex;
  }
}
