import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router, RouterLink} from '@angular/router';
import {User} from '../../model/shared/user.model';
import {getCookie} from 'typescript-cookie';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  username: string = "";
  password: string = "";

  loginError: string | null = null;

  ngOnInit() {
  }

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  validateUser(form: NgForm) {
    this.loginError = null;

    if (form.invalid) {
      form.control.markAsTouched();
      return;
    }

    const user = new User();
    user.username = this.username;
    user.password = this.password;
    this.loginService.validateLoginDetails(user).subscribe({
        next: (response) => {
          // success
          console.log(response);
          const userData = response.body as User;
          window.sessionStorage.setItem("userdetails", JSON.stringify(userData));
          let xsrf = getCookie("XSRF-TOKEN")!;
          window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          if (error.status === 401 || error.status === 400) {
            this.loginError = "Invalid username or password";
          } else if (error.status === 0) {
            this.loginError = "Server is not responding";
          } else {
            this.loginError = error.error?.message || "Login attempt failed, please try again."
          }
        }
      }
    );
  }
}
