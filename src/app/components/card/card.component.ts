import { Component, Input } from '@angular/core';
import { SuperHero } from '@core/models';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() hero!: SuperHero;
}
