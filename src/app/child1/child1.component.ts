import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
 // templateUrl: './child1.component.html',
 template: `<div *ngFor="let x of ['red','green','yellow']">
   <button (click)="AddColor(x)">{{x}}</button>
 </div>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() changecolor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  AddColor(color: string): void {
    this.changecolor.emit(color);
  }


}
