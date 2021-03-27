import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() user = new EventEmitter();
  userValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    console.log(this.userValue)
    // this.user.emit(this.userValue)
  }
}
