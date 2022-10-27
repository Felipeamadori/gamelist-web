import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentVisualizerComponent } from './games/content-visualizer/content-visualizer.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent, canActivate:[AuthGuard]
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'games', component: GameListComponent,
  },
  {
    path:'games/:id_game', component: ContentVisualizerComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }