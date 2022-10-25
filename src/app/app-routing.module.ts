import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'games',
    component: GameListComponent,
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
