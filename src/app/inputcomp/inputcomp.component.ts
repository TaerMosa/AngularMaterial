import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputcomp',
  //templateUrl: './inputcomp.component.html',
  template: `<h4>hello {{name}}</h4>`,
  styleUrls: ['./inputcomp.component.css']
})
export class InputcompComponent  {

@Input() name: string;
}
