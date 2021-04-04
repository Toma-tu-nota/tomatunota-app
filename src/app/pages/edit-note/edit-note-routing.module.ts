import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditNotePage } from './edit-note.page';
import { NameComponent } from './components/name/name.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'name',
    component: EditNotePage
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
export class EditNotePageRoutingModule {}
