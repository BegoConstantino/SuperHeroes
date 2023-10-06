import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearcherComponent } from './searcher.component';
import { UppercaseDirective } from '@shared/directives/uppercase.directive';

@NgModule({
	declarations: [SearcherComponent, UppercaseDirective],
	imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, FormsModule],
	exports: [SearcherComponent],
})
export class SearcherModule {}
