import { Injectable } from '@angular/core';
import { NoteInterface } from '../core/interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public note = {} as NoteInterface;
  public notes = [];
  constructor() {}
}
