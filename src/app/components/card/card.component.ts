import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from '@core/models';
import { HeroesService } from '@core/services/heroes.service';
import { MainRoutes } from '@shared/constants';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() hero!: SuperHero;

	constructor(
		private router: Router,
		private heroesService: HeroesService,
	) {}

	public goToDetail(id: number) {
		this.router.navigate([MainRoutes.DETAIL, id]);
	}

	public delete(id: number) {
		this.heroesService.deleteSuperHero(id);
	}
}
