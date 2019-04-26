import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../userModel';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})

export class FormModalComponent {

  public user: User;
  phonePattern = "^[-+0-9()\s]+$";
  agePattern = "^[1-9]?[0-9]{1}$|^100$"

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    phone: ['', Validators.compose([
      Validators.required, Validators.pattern(this.phonePattern)
    ])],
    age: ['', Validators.pattern(this.agePattern)],
    id: [ this.getRandomId()]

  });

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private usersService: UsersService) {}


  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  createUser() {
    this.user = this.userForm.value;
    console.log(this.user);
    this.usersService.createUser(this.user).subscribe( res =>{

    }, (err) => {
      console.log(err)
    })
    this.activeModal.close(this.userForm.value);
  }

  getRandomId() {
    return Math.floor(Math.random()*1000000) ;
  }

}
