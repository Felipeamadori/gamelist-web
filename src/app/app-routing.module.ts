import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentVisualizerComponent } from './games/content-visualizer/content-visualizer.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutComponent } from './utils/about/about.component';
import { CommunityComponent } from './community/community.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent, canActivate:[AuthGuard]
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'user/profile', component: UserProfileComponent
  },
  {
    path:'user/edit', component: EditProfileComponent
  },
  {
    path:'users/:userId', component: UserProfileComponent
  },
  {
    path:'community', component: CommunityComponent
  },
  {
    path:'games', component: GameListComponent
  },
  {
    path:'games/:id_game', component: ContentVisualizerComponent
  },
  {
    path: 'about-us', component: AboutComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
            RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
           ],
  exports: [RouterModule]
})

export class AppRoutingModule { }