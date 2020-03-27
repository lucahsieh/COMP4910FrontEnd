import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    //localStorage.removeItem('currentUser');
    console.log("current localstorage of current user is: " + localStorage.getItem('currentUser'));
    console.log("current token is: " + localStorage.getItem("currentUserToken"));
    //console.log("token is: " + JSON.parse(localStorage.getItem("currentUser"))["token"]);  //if this null, it fails
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credentialId: string, password: string) {
    //perry backend code
    let baseUrl = environment.authUrl;
    return this.http.post<any>(baseUrl + 'api/Credentials/Authenticate', { credentialId, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));  //must serialize json to string since it saves it as key-value pair)
        localStorage.setItem('currentUserToken', JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["token"]));
        localStorage.setItem('currentUserEmployeeId', JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["employeeId"]))
        this.currentUserSubject.next(user);  //sets currentUserSubject to the new user  (next just sets the behaviourSubject to user)
        return user;
      }));

    // //Fake backend code
    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.currentUserSubject.next(user);  //sets currentUserSubject to the new user  (next just sets the behaviourSubject to user)
    //     return user;
    //   }));
  }
  changePW(credentialId: string, password: string, newPassword: string) {
    let baseUrl = environment.authUrl;
    let url = baseUrl + `api/Credentials/Authenticate/ChangePW`;
    let body = {
      "credentialId": credentialId,
      "password": password,
      "newPassword": newPassword
    }
    return this.http.post<any>(url, body).pipe();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserToken');
    this.currentUserSubject.next(null);
  }
}