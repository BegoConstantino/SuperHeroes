import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CardModule } from '@app/components/card/card.module';
import { ConfirmDialogModule } from '@app/components/confirm-dialog/confirm-dialog.module';
import { SearcherModule } from '@app/components/searcher/searcher.module';
import { ListComponent } from './list.component';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, MatPaginatorModule, CardModule, SearcherModule, ConfirmDialogModule],
})
export class ListModule {}
