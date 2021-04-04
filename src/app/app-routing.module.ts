import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'add-note',
    loadChildren: () =>
      import('./pages/add-note/add-note.module').then(m => m.AddNotePageModule)
  },
  {
    path: 'edit-note',
    loadChildren: () =>
      import('./pages/edit-note/edit-note.module').then(
        m => m.EditNotePageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
