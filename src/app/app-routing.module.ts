import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutes } from '@shared/constants';
import { ErrorComponent } from '@views/error/error.component';

const routes: Routes = [
	{
		path: MainRoutes.HOME,
		loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: MainRoutes.LIST,
		loadChildren: () => import('./views/list/list.module').then((m) => m.ListModule),
	},
	{
		path: MainRoutes.DETAIL,
		loadChildren: () => import('./views/detail/detail.module').then((m) => m.DetailModule),
	},
	{
		path: MainRoutes.FORM,
		loadChildren: () => import('./views/form/form.module').then((m) => m.FormModule),
	},
	{ path: MainRoutes.ERROR, component: ErrorComponent },
	{ path: '', redirectTo: MainRoutes.HOME, pathMatch: 'full' },
	{ path: '**', redirectTo: MainRoutes.HOME, pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
