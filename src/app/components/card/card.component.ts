import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from '@core/models';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() hero!: SuperHero;
	@Output() deleteHeroEmitter = new EventEmitter<SuperHero>();
	@Output() editHeroEmitter = new EventEmitter<SuperHero>();
	@Output() goToDetailEmitter = new EventEmitter<number>();
}
