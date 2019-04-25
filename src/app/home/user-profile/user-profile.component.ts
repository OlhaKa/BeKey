import { Component, OnInit } from '@angular/core';
import Users from './../../resources/users.json';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../userModel.js';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  usersList: any[] = Users;
  user: User;
  userId: string;
  
  constructor(private route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      if (params) {
        this.userId = params['id'];
        this.user = this.getUserById();
      } else {
        this._router.navigate(['/']);
      }

  });

  
  }
  getUserById() {
    return this.usersList.find(user => user._id === this.userId);
  }
  





}
