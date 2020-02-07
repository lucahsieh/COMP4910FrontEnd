import { Component } from '@angular/core';
import { User } from './shared/model/user';
import { AuthenticationService } from './core/service/authentication.service';
import { Router } from '@angular/router';

import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModuleDemo';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    setTheme('bs3');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
