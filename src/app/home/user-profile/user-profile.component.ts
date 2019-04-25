import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../userModel.js';
import { UsersService } from '../users.service.js';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  usersList: any[];
  user: User;
  userId: any;

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this._usersService.getUserProfile(this.userId).subscribe((res) => {
        this.user = res;
      })
      console.log(this.user)
    });
  }

  getUserInfo() {
    
  }

}
