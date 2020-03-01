// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // NOTE: Front end devs enable these lines below
  // apiUrl: 'http://localhost:4000/',
  // authUrl: 'http://localhost:4000/',
  // fakeBackend: true,

  // NOTE: 44318/5001 is the actual backend server that Perry is using.
  // authUrl: 'https://localhost:5001/',
  // apiUrl: 'https://localhost:5001/',
  // fakeBackend: false,  //change this to true if you're not Perry 

  // NOTE: Elaboration DEMO
  apiUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',
  authUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',
  fakeBackend: false

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
