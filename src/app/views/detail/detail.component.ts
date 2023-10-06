import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHero } from '@core/models';
import { HeroesService } from '@core/services/heroes.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	hero!: SuperHero;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private heroesService: HeroesService,
	) {}

	ngOnInit(): void {
		const routeId = this.route.snapshot.paramMap.get('id');
		if (routeId) {
			this.heroesService.getSuperHeroById(Number(routeId)).subscribe({
				next: (result) => {
					this.hero = result;
				},
				error: () => {},
			});
		}
	}
}
