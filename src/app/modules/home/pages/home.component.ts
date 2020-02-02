import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/core/service/city/city.service';
import { City } from 'src/app/shared/model/city';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/shared/model/user';
import { first } from 'rxjs/operators';
import { EmployeeService} from 'src/app/core/service/employee/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];
  id = 6173331;
  citylist: City[];
  availableUsername;

  //inject service into constructor?
  constructor( private cityService: CityService, private userService: UserService, private employeeService : EmployeeService) { 

  }

  ngOnInit() {
    console.log("inside home.component.ts init");
    this.loading = true;
    this.citylist = [];
    this.availableUsername;

    // this.cityService.getCities().subscribe(l => {
    //   this.citylist = l;
    //   console.log(l);
    // });
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.loading = false;
    //   this.users = users;
    // });

  }

  findAvailableUsername(){
    console.log(localStorage.getItem("currentUser") + ", token is.... "  + localStorage.getItem("currentUserToken"));
    this.employeeService.getAvailableUsername(localStorage.getItem('currentUserToken')).subscribe( response => {
      console.log("printing available username from home component: " + response["Username"]);
      console.log(response);
      this.availableUsername = response["Username"];
    })
  }

}
