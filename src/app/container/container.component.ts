import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() {console.log('app component');
 }

  ngOnInit() {
    console.log('app component');
  }

}
