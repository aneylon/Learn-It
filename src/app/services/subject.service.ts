import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  getSubjects() {
    return [
      {
        id: 1,
        title: "One",
        subTitle: "1 One"
      },{
        id: 2,
        title: "Two",
        subTitle: "2 Two"
      },{
        id: 3,
        title: "Three",
        subTitle: "3 Three"
      }
    ]
  }

  constructor() { }
}
