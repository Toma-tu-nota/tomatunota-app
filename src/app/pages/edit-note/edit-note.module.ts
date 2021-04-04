import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNotePageRoutingModule } from './edit-note-routing.module';

import { EditNotePage } from './edit-note.page';
import { SharedModule } from '../../shared/shared.module';
import { NameComponent } from './components/name/name.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    EditNotePageRoutingModule
  ],
  declarations: [EditNotePage, NameComponent, DescriptionComponent]
})
export class EditNotePageModule {}
