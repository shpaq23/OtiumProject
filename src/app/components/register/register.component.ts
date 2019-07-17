import { Component, OnInit } from '@angular/core';
import {LoginForm} from '../form/form.component';
import {AuthorizationService} from '../../api/services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: LoginForm;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }
  formSubmitted($event: LoginForm) {
    this.loginForm = $event;
    console.log(this.loginForm);
  }
}
