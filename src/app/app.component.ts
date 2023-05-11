import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'control-clients';
}

export const enviroment = {
  firestore: {
    apiKey: 'AIzaSyAXslc03ujBR1nYf5lPOoUsfBIUR5upaw8',
    authDomain: 'angularcontrolclients.firebaseapp.com',
    projectId: 'angularcontrolclients',
    storageBucket: 'angularcontrolclients.appspot.com',
    messagingSenderId: '1072464202991',
    appId: '1:1072464202991:web:ea51d0b8b4b598ed5b9f1a',
    measurementId: 'G-W2ZYTPCB5V',
  },
  production: true,
};
