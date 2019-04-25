import { Component, OnInit } from '@angular/core';
import { User } from './userModel';
import { UsersService } from './users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usersList:User[];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.getUsersList();
    
  }

  getUsersList() {
    this._usersService.getAllUsers().subscribe((response) => {
            this.usersList = response;
        });
  }

}
