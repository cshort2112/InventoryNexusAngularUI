import {Component, OnInit} from '@angular/core';
import {User} from '../../model/shared/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [
  ],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit{
  user = new User();
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    window.sessionStorage.setItem('user', "");
    window.sessionStorage.setItem('XSRF-TOKEN', "");
    this.router.navigate(['/login']);
  }

}
