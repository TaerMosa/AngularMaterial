import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'Book store';
  color: string;
  JB = 'https://www.johnbryce.co.il/sites/all/themes/bryce/logo.png';
  flag = false;
  name = ' ';
  namelist = ['dan', 'Gel'];
  asyncdata = new Promise(( resolve, reject) => { setTimeout(() =>
    resolve('asyncData'), 5000);
});

   onkeyup(val) {
    this.name = val;
  }
  add(newname) {
    this.namelist.push(newname);
  }
  UpdateColor(color: string): void {
     this.color = color;
  }
}

@Pipe({name: 'expon'})
export class ExpPip implements PipeTransform {

  transform(value: number , exp: string): number {
    const num = parseFloat(exp);
    return Math.pow(value, num);
  }

}
