import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { reducers } from '@core/rxjs/reducer';
import { HeroesService } from '@core/services/heroes.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailModule } from '@views/detail/detail.module';
import { FormModule } from '@views/form/form.module';
import { ListModule } from '@views/list/list.module';

registerLocaleData(localeEs, 'es');

const InportedModules = [ListModule, DetailModule, FormModule];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			name: 'superheroes',
		}),
		LayoutsModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
	],
	providers: [
		HeroesService,
		{
			provide: LOCALE_ID,
			useValue: 'es',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
