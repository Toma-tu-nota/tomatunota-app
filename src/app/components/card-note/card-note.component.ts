import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../constants/constants.service';
import { Router } from '@angular/router';
import { NoteInterface } from '../../core/interfaces/note.interface';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss']
})
export class CardNoteComponent implements OnInit {
  constructor(public variables: ConstantsService, public router: Router) {}
  ngOnInit() {}
  deleteNote(note) {
    let removeIndex = this.variables.notes.findIndex(
      item => item.id == note.id
    );
    this.variables.notes.splice(removeIndex, 1);
    this.router.navigate(['/home']);
  }
  editNote(item) {
    this.router.navigate(['/edit-note']);
    this.variables.note = item;
  }
}
