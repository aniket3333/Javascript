<script src="https://accounts.google.com/gsi/client" async defer></script>




import { Injectable } from '@angular/core';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private clientId = 'YOUR_CLIENT_ID_HERE'; // Replace with your actual Client ID

  constructor() {
    this.initGoogleSignIn();
  }

  private initGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.handleGoogleLogin.bind(this)
    });
  }

  public renderButton(buttonId: string) {
    google.accounts.id.renderButton(document.getElementById(buttonId), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  private handleGoogleLogin(response: any) {
    console.log('Google Login Response:', response);
    // Handle the response (e.g., send it to your backend for verification)
  }
}



import { Component, AfterViewInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';

@Component({
  selector: 'app-root',
  template: `<div id="google-btn"></div>`,
})
export class AppComponent implements AfterViewInit {

  constructor(private googleAuthService: GoogleAuthService) {}

  ngAfterViewInit() {
    this.googleAuthService.renderButton('google-btn');
  }
}

