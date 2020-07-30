import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gray-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  nomButton = 'btn1';
  constructor() { }

  ngOnInit(): void {
  }

}
