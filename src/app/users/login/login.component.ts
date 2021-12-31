import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';


declare var $: any;
declare var kendo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // $(document).ready( () => {
    //   $("#wrap img").hover( () => {
    //     kendo.fx(this).zoom("in").startValue(1).endValue(1.5).play();
    //   },  () => {
    //     kendo.fx(this).zoom("out").endValue(1).startValue(1.5).play();
    //   });
    // })

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
  
}
