import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginForm} from '../form/form.component';
import {UserState} from '../../store/state/user.state';
import {select, Store} from '@ngrx/store';
import {getError} from '../../store/selectors/user.selectors';
import {Observable} from 'rxjs';
import {LoginUser} from '../../store/actions/user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  serverError$: Observable<string>;
  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.serverError$ = this.store.pipe(select(getError));

  }

  formSubmitted($event: LoginForm) {
    console.log($event);
    this.store.dispatch(new LoginUser($event));
  }

  ngOnDestroy(): void {
    console.log('onDestroy LoginComponent');
  }
}
