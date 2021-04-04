import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../../../../constants/constants.service';
import { NoteInterface } from '../../../../core/interfaces/note.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  description: string;
  constructor(public router: Router, public variables: ConstantsService) {}

  ngOnInit() {}
  typingText($event) {
    this.description = $event.target.value;
  }
  saveDescription() {
    this.variables.note.description = this.description;
    this.variables.notes.push(this.variables.note);
    this.variables.note = {} as NoteInterface;
    this.router.navigate(['home']);
  }
}
