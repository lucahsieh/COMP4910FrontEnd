// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // NOTE: 44318/5001 is the actual backend server that Perry is using.  https://localhost:44318/'
  // Note:  http://comp4911webapi-elaboration.apps.shift.infoteach.ca/ is the prod server 
  authUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',  //http://localhost:4000/' for frontend devs
  apiUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',  //http://localhost:4000/' for frontend devs
  fakeBackend: false,  //change this to true if you're not Perry 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
