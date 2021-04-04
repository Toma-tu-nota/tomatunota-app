import { Component } from '@angular/core';
import { ConstantsService } from '../../constants/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public variables: ConstantsService) {}
  ngOnInit() {}
}
