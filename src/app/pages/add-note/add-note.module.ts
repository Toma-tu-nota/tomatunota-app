import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotePageRoutingModule } from './add-note-routing.module';

import { AddNotePage } from './add-note.page';
import { SharedModule } from '../../shared/shared.module';
import { NameComponent } from './components/name/name.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddNotePageRoutingModule
  ],

  declarations: [AddNotePage, NameComponent, DescriptionComponent]
})
export class AddNotePageModule {}
