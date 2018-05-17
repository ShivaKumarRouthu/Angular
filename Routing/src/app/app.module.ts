import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { MoviesComponent } from './movies/movies.component';
import { TheatersComponent } from './theaters/theaters.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatersComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
