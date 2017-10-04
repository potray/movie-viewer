import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {MovieListComponent} from './movie-list/movie-list.component';
import {TheMovieDatabaseService} from './the-movie-database.service';
import {HttpModule} from '@angular/http';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [ TheMovieDatabaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
