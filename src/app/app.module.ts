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
import { UserModule } from './user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenIntercepterService } from './core/service/tokenIntercepter.service';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CommunityComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenIntercepterService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }