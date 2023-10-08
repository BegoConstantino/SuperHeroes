import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ConfirmDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule],
	providers: [
		{ provide: MatDialogRef, useValue: {} },
		{ provide: MAT_DIALOG_DATA, useValue: [] },
		{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
	],
	exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
