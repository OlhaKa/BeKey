import { Component, OnInit } from '@angular/core';
import Users from './../resources/users.json';
import { User } from './userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usersList:User[] = Users;

  constructor() { }

  ngOnInit() {
      
  }

}
