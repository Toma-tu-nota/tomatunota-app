import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotePage } from './add-note.page';
import { NameComponent } from './components/name/name.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'name',
    component: AddNotePage
  },
  {
    path: 'name',
    component: NameComponent
  },
  {
    path: 'description',
    component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNotePageRoutingModule {}
