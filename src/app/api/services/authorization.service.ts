import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {LoginForm} from '../../user/form/form.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface User {
  token: string;
  expireDate: string;
  email: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  url = environment.apiUrl + '/authorization';
  constructor(private http: HttpClient) { }

  register(registerForm: LoginForm): Observable<any> {
    return this.http.post(this.url + '/register', registerForm);
  }
  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(this.url + '/loginToPlatform', loginForm);
  }
  logout(): Observable<any> {
    return this.http.get(this.url + '/logout');
  }
}
