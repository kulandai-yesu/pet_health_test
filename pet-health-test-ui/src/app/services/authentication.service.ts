import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegistrationRequest } from '../models/registration-request';
import { AuthenticationRequest } from '../models/authentication-request';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly baseUrl: string = 'http://localhost:8080/api/auth';

  http: HttpClient = inject(HttpClient);

  register(request: RegistrationRequest) {
    return this.http.post(this.baseUrl + '/register', request);
  }

  authenticate(request: AuthenticationRequest) {
    return this.http.post(this.baseUrl + '/authenticate', request);
  }

  activateAccount(token: string) {
    return this.http.get(`${this.baseUrl}/activate-account?token=${token}`);
  }
}
