import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../components/btn/btn.component';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from '../components/input/input.component';

@NgModule({
  declarations: [BtnComponent, InputComponent],
  exports: [BtnComponent, InputComponent],
  imports: [CommonModule, IonicModule]
})
export class SharedModule {}
