import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  currentUser: User = this.authenticationService.currentUserValue;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.currentUser);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }
}
