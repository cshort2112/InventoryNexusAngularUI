import { Component } from '@angular/core';
import {AppNavbar} from "../app-navbar/app-navbar";

@Component({
  selector: 'app-dashboard',
    imports: [
        AppNavbar
    ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
