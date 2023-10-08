import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ConfirmDialogModule } from '@app/components/confirm-dialog/confirm-dialog.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
		ConfirmDialogModule,
		MatButtonModule
  ]
})
export class DetailModule { }
