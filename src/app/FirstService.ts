import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

    personName: any = 'Bob';
    person = {name: 'Eve'};

    ChangeName(name1, name2) {
       this.personName = name1;
       this.person.name = name2;
    }

}
