import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
    private clientId = '523653307994-rofae2coq6927bdj072jjnsu9aivdkkl.apps.googleusercontent.com';

  constructor(private router: Router) {
    this.initGoogleSignIn();
  }

  private initGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.handleGoogleLogin.bind(this),
      // Requesting additional scopes
      scope: 'email profile https://www.googleapis.com/auth/user.phonenumbers.read'
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

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleGoogleLogin(resp: any) {
    if (resp) {
      const payload = this.decodeToken(resp.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      this.router.navigate(['/request-song-list-new/']);
      this.getUserPhoneNumber(resp.credential); // Call to fetch the phone number
    }
  }

  private getUserPhoneNumber(token: string) {
    const headers = new Headers({
      'Authorization': `Bearer ${token}`,
    });

    fetch('https://people.googleapis.com/v1/people/me/phoneNumbers', {
      method: 'GET',
      headers: headers
    })
    .then(response => response.json())
    .then(data => {
      console.log('User Phone Numbers:', data);
    })
    .catch(error => console.error('Error fetching phone numbers:', error));
  }
}
