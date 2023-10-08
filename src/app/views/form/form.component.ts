import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { NewSuperHero, SuperHero } from '@core/models';
import { HeroesSelectors } from '@core/rxjs';
import { HeroesService } from '@core/services/heroes.service';
import { Store } from '@ngrx/store';
import { MainRoutes } from '@shared/constants';
import { MyErrorStateMatcher } from '@shared/validators/ErrorState.validator';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	form = new FormGroup({
		name: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(20)]),
		heroName: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(15)]),
		powers: new FormControl<string[]>([], [Validators.required, Validators.minLength(1)]),
		level: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(999)]),
		description: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(200)]),
	});
	matcher = new MyErrorStateMatcher();

	powerList: string[] = [];
	hero?: SuperHero;

	constructor(
		private heroesService: HeroesService,
		private readonly store: Store,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.store.select(HeroesSelectors.selecDetail).subscribe((hero) => {
			if (!!hero) {
				this.fillFormFields(hero);
			}
		});
	}

	private fillFormFields(hero: SuperHero) {
		if (!hero) {
			return;
		}
		this.hero = hero;
		this.form.controls.name.setValue(hero.name);
		this.form.controls.heroName.setValue(hero.heroName);
		this.form.controls.level.setValue(hero.level);
		this.form.controls.description.setValue(hero.description);
		this.powerList = hero.powers;
	}

	saveHero() {
		this.form.controls.powers.setValue(this.powerList);
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		const values: NewSuperHero = this.form.getRawValue() as NewSuperHero;
		if (!!this.hero) {
			const newValues: SuperHero = { ...this.hero, ...values };
			this.heroesService.updateSuperHero(newValues);
		} else {
			this.heroesService.addSuperHero(values);
		}
		this.router.navigate([MainRoutes.LIST]);
	}

	removePower(power: string) {
		const index = this.powerList.indexOf(power);
		if (index >= 0) {
			const newList = [...this.powerList];
			newList.splice(index, 1);
			this.powerList = newList;
		}
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			this.powerList.push(value);
		}
		event.chipInput!.clear();
	}

	goBack() {
		this.router.navigate([MainRoutes.LIST]);
	}
}
