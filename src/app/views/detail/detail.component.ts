import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from '@app/components/confirm-dialog/confirm-dialog.component';
import { SuperHero } from '@core/models';
import { HeroesActions } from '@core/rxjs';
import { HeroesService } from '@core/services/heroes.service';
import { Store } from '@ngrx/store';
import { MainRoutes } from '@shared/constants';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	hero?: SuperHero;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private heroesService: HeroesService,
		public dialog: MatDialog,
		private readonly store: Store,
	) {}

	ngOnInit(): void {
		const routeId = this.route.snapshot.paramMap.get('id');
		if (routeId) {
			this.hero = this.heroesService.getSuperHeroById(Number(routeId));
		}
	}

	deleteHero(hero: SuperHero) {
		const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
			data: hero,
		});
		confirmDialog.afterClosed().subscribe((result: boolean) => {
			if (!!result) {
				this.heroesService.deleteSuperHero(hero.id);
				this.router.navigate([MainRoutes.LIST]);
			}
		});
	}

	editHero(hero: SuperHero) {
		this.store.dispatch(HeroesActions.setDetail({ value: hero }));
		this.router.navigate([MainRoutes.EDIT]);
	}
}
