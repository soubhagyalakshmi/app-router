import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
    console.log('app component')
   }

  ngOnInit() {
    console.log('app component')
  }

}
