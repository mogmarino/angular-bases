import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 15
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void {
    // console.log('indice: ',index);
    if(!id) return
    this.onDelete.emit(id)

  }
}
