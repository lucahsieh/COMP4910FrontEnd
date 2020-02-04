import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

// fake users
// only for testing purpose. dont do this in production code.
const users: User[] = [
    {
        "userName": "A123",
        "password": "master",
        "token": "JWT_TOKEN1",
        "employeeId": "A123",
        "jobTitle": "Master User",
        "firstName": "Master",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": null,
        "timesheetApproverId": null,
    },
    {
        "userName": "A456",
        "password": "regular",
        "token": "JWT_TOKEN2",
        "employeeId": "A456",
        "jobTitle": "Senior Software Developer",
        "firstName": "Regular",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": "A123",
        "timesheetApproverId": "A789",
    },
    {
        "userName": "A789",
        "password": "lower",
        "token": "JWT_TOKEN3",
        "employeeId": "A789",
        "jobTitle": "Junior Software Developer",
        "firstName": "Lower",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": "A123",
        "timesheetApproverId": null,
    }
];

/**
 * This class intercept the https request, when user make a
 * login/logout request. We use client side hardcoded user 
 * for front end dev testing. 
 */
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            // 
            switch (environment.fakeBackend) {
                //comment out all cases and use default instead when testing with real backend
                // user login.
                case url.endsWith('/Credentials/Authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            const { userName, password } = body;
            const user = users.find(x => x.userName === userName && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok(user)
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};