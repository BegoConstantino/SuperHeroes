import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [FormComponent],
	imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule],
})
export class FormModule {}
