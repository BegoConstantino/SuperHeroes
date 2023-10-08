import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from '@core/models';
import { HeroesActions, HeroesSelectors } from '@core/rxjs';
import { HeroesService } from '@core/services/heroes.service';
import { Store } from '@ngrx/store';
import { MainRoutes } from '@shared/constants';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@app/components/confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent {
	heroesList$ = this.store.select(HeroesSelectors.getList);
	pageSize = 6;
	currentPage: number = 0;

	constructor(
		private readonly store: Store,
		private router: Router,
		private heroesService: HeroesService,
		public dialog: MatDialog,
	) {}
	changePage(pageIndex: number): void {
		this.currentPage = pageIndex;
	}

	deleteHero(hero: SuperHero) {
		const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
			data: hero,
		});
		confirmDialog.afterClosed().subscribe((result: boolean) => {
			if (!!result) {
				this.heroesService.deleteSuperHero(hero.id);
			}
		});
	}

	editHero(hero: SuperHero) {
		this.store.dispatch(HeroesActions.setDetail({ value: hero }));
		this.router.navigate([MainRoutes.EDIT]);
	}

	goToDetail(id: number) {
		this.router.navigate([MainRoutes.DETAIL, id]);
	}
	
	createNewHero() {
		this.router.navigate([MainRoutes.FORM])
	}
}
