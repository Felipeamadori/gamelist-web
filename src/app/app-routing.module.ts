import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'games',
    component: GamesComponent,
    children: [
      {
        path: ':gameTitle', component: ContentVisualizerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
