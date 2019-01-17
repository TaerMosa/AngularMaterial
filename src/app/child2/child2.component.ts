import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  //templateUrl: './child2.component.html',
  template: `<p> selected color :{{selected}}</p>`,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() selected: string;
  constructor() { }

  ngOnInit() {
  }



}
