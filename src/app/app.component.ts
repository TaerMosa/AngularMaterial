import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { defineBase } from '@angular/core/src/render3';
import { FirstService } from './FirstService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Book store';
  toChoice = 'Thaer';
  color: string;
  url = 'http://echo.jsontest.com/key/value/one/two ';
  JB = 'https://www.johnbryce.co.il/sites/all/themes/bryce/logo.png';
  flag = false;
  name = ' ';
  namelist = ['dan', 'Gel'];
  FirstName;
  Personname;
  animalList = [
    {  
      name : 'cow',
      color : 'blue',
      numOfLegs: 4
    },
    { 
       name : 'bird',
      color : 'white',
      numOfLegs: 2
    }
  ];

  asyncdata = new Promise(( resolve, reject) => { setTimeout(() =>
    resolve('asyncData'), 7000);
});

 constructor(private firstserv: FirstService, http: HttpClient) {
  http.get(this.url).subscribe(result => {
    console.log(result);
   });
 }

 ngOnInit(): void {
  this.FirstName = this.firstserv.personName;
  this.Personname = this.firstserv.person;
}

  setName() {
    this.firstserv.ChangeName('Alex', 'Ram');
  }

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
/*
constructor(http: HttpClient) {
  http.get(this.url).subscribe(result => {
      console.log(result);
  });
}

*/
