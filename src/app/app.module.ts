import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GamesModule } from './games/games.module';
import { UtilsModule } from './utils/utils.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GamesModule,
    UtilsModule,
    HomeModule,
    ErrorsModule,
    UserModule,
    ToastrModule.forRoot()
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }