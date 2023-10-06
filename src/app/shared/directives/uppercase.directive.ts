import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[appUppercase]',
})
export class UppercaseDirective {
	constructor(private ngControl: NgControl) {}

	@HostListener('input', ['$event.target.value'])
	onInput(value: string): void {
		this.ngControl.valueAccessor!.writeValue(value.toUpperCase());
	}
}
