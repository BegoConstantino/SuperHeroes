import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '@core/services/heroes.service';
import { tap } from 'rxjs';

@Component({
	selector: 'app-searcher',
	templateUrl: './searcher.component.html',
	styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
	searchForm = new FormControl<string>('');

	constructor(
		private heroesService: HeroesService
	) {}
	ngOnInit(): void {
		this.searchForm.valueChanges
			.pipe(
				tap((value) => {
					console.log(value);
					this.heroesService.getSuperHeroesByName(value as string);
				}),
			)
			.subscribe();
	}
}
