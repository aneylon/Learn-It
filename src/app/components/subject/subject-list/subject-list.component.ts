import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects?: Subject[]

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjects = this.subjectService.getSubjects()
    this.subjectService.getSubjects()
  }

}
