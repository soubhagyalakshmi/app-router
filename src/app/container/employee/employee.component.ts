import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { 
    console.log('app component');
  }

  ngOnInit() {
    console.log('app component');
  }

}
