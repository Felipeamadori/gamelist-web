import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GamesModule } from '../games/games.module';

@NgModule({
    declarations: [ LoginComponent, RegisterComponent, HomeComponent ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        RouterModule,
        UtilsModule,
        GamesModule
    ]
})
export class HomeModule { }