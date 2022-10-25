import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { GameListComponent } from './games/game-list/game-list.component';

const routes: Routes = [
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
