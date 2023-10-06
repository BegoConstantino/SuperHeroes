import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutes } from '@shared/constants';
import { DetailComponent } from '@views/detail/detail.component';
import { FormComponent } from '@views/form/form.component';
import { ListComponent } from '@views/list/list.component';

const routes: Routes = [
	{
		path: MainRoutes.LIST,
		component: ListComponent,
	},
	{
		path: MainRoutes.DETAIL + '/:id',
		component: DetailComponent,
	},
	{
		path: MainRoutes.FORM,
		component: FormComponent,
	},
	{ path: '', redirectTo: MainRoutes.LIST, pathMatch: 'full' },
	{ path: '**', redirectTo: MainRoutes.LIST, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
