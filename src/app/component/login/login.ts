import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  username: string = "";
  password: string = "";
  private model: User;

  ngOnInit() {

  }

  constructor(private loginService: LoginService,
              private router: Router,
              user: User) {
    this.model = user;
  }

  validateUser(loginFrom: NgForm) {
    this.model.username = this.username;
    this.model.password = this.password;
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        this.router.navigate(['dashboard']);
      }
    );
  }
}
