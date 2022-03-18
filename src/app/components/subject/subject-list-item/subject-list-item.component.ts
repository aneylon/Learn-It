import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-subject-list-item',
  templateUrl: './subject-list-item.component.html',
  styleUrls: ['./subject-list-item.component.css']
})
export class SubjectListItemComponent implements OnInit {

  @Input() subject?: Subject
  constructor() { }

  ngOnInit(): void {
  }

}
