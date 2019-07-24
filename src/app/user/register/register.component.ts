import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../form/form.component';
import {UserState} from '../../store/state/user.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getError, getSuccess} from '../../store/selectors/user.selectors';
import {RegisterUser} from '../../store/actions/user.actions';
import {SpinnerState} from '../../store/state/spinner.state';
import {isSpinnerShowing} from '../../store/selectors/spinner.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  serverError$: Observable<string>;
  loading$: Observable<boolean>;
  success$: Observable<boolean>;
  constructor(private store: Store<UserState>,
              private spinnerStore: Store<SpinnerState>) { }

  ngOnInit() {
    this.serverError$ = this.store.pipe(select(getError));
    this.loading$ = this.spinnerStore.pipe(select(isSpinnerShowing));
    this.success$ = this.store.pipe(select(getSuccess));
  }
  formSubmitted($event: LoginForm) {
    console.log($event);
    this.store.dispatch(new RegisterUser($event));
  }

}
