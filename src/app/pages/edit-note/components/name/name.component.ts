import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../../../../constants/constants.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name: string;
  constructor(public router: Router, public variables: ConstantsService) {}

  ngOnInit() {
    this.name = this.variables.note.name;
  }
  typingText($event) {
    this.name = $event.target.value;
  }
  saveName() {
    this.variables.note.name = this.name;
    this.router.navigate(['edit-note/description']);
  }
}
