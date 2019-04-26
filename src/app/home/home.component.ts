import { Component, OnInit } from '@angular/core';
import { User } from './userModel';
import { UsersService } from './users.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usersList:User[];

  constructor(private _usersService: UsersService,
              private modalService: NgbModal,
              config: NgbModalConfig) { 
                config.backdrop = 'static';
              }

  ngOnInit() {
    this.getUsersList();
    
  }

  getUsersList() {
    this._usersService.getAllUsers().subscribe((response) => {
            this.usersList = response;
        });
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    
    modalRef.result.then((result) => {  
        this.getUsersList();
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteUser(id:number, index:number) {
    this._usersService.delete(id).subscribe(response =>{
      this.getUsersList();
    });
 }


}
