import { Component } from '@angular/core';
import {AppNavbar} from "../app-navbar/app-navbar";

@Component({
  selector: 'app-user',
    imports: [
        AppNavbar
    ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

}
