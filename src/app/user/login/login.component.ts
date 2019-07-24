import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../form/form.component';
import {UserState} from '../../store/state/user.state';
import {select, Store} from '@ngrx/store';
import {getError} from '../../store/selectors/user.selectors';
import {Observable} from 'rxjs';
import {LoginUser} from '../../store/actions/user.actions';
import {SpinnerState} from '../../store/state/spinner.state';
import {isSpinnerShowing} from '../../store/selectors/spinner.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  serverError$: Observable<string>;
  loading$: Observable<boolean>;
  constructor(private userStore: Store<UserState>,
              private spinnerStore: Store<SpinnerState>) { }

  ngOnInit() {
    this.serverError$ = this.userStore.pipe(select(getError));
    this.loading$ = this.spinnerStore.pipe(select(isSpinnerShowing));
  }

  formSubmitted($event: LoginForm) {
    console.log($event);
    this.userStore.dispatch(new LoginUser($event));
  }

}
