import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputcomp',
  templateUrl: './outputcomp.component.html',
  styleUrls: ['./outputcomp.component.css']
})
export class OutputcompComponent {

  @Output() ClickName: EventEmitter<string> = new EventEmitter<string>();

  onNameClick(name: string) {
   this.ClickName.emit(name);
  }

}
