import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamelistModule } from './game-list/game-list.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentVisualizerComponent,
    FooterComponent,
    GameListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GamelistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }