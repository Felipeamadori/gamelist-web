import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { GamesModule } from './games/games.module';
import { UtilsModule } from './utils/utils.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentVisualizerComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GamesModule,
    UtilsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }