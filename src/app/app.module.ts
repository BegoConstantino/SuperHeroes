import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { reducers } from '@core/rxjs/reducer';
import { HeroesService } from '@core/services/heroes.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
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
