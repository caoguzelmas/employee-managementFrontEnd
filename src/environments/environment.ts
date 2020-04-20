// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {UserType} from '../app/model/UserType';
import {Employee} from '../app/model/Employee';

export const environment = {
  production: false,
  API_BASE_PATH: 'http://localhost:9090',
  currentUser: {
    userId: 2,
    userName: 'caoguzelmas',
    password: '',
    userRole: null,
    createdAt: '2020/04/20 12:35:22',
    updatedAt: null,
    employee: {
      id: 1,
      firstName: 'Oğuz',
      lastName: 'Elmas',
      title: 'Software Developer',
      department: 'Product Improvements',
      eMail: 'caoguzelmas@gmail.com',
      phoneNumber: '+905313081770',
      photo: 'not yet',
      createdAt: '2020/04/20 12:32:44',
      updatedAt: null
    }
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
