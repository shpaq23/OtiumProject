import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../api/services/authorization.service';
import {LoginForm} from '../form/form.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() { }

  formSubmitted($event: LoginForm) {
    this.loginForm = $event;
    console.log(this.loginForm);
  }
}
