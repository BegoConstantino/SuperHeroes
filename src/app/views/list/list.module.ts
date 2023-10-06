import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './list.component';
import { CardModule } from '@app/components/card/card.module';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, MatPaginatorModule, CardModule],
})
export class ListModule {}
