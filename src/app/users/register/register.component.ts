import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    address: null, 
    contact: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstName, lastName, username, email, password, address, contact } = this.form;

    this.authService.register(firstName, lastName, username, email, password, address, contact).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
