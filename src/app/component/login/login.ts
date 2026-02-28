import {Component, OnInit} from '@angular/core';
import {AppNavbar} from '../app-navbar/app-navbar';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    AppNavbar,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  authStatus: string = "";
  model = new User();

  ngOnInit() {

  }

  constructor(private loginService: LoginService, private router: Router) {

  }

  validateUser(loginFrom: NgForm) {
    this.loginService.validateLoginDetails(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        this.router.navigate(['dashboard']);
      }
    );
  }

}
