import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {isSpinnerShowing} from './store/selectors/spinner.selectors';
import {takeWhile} from 'rxjs/operators';
import {SpinnerState} from './store/state/spinner.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'OtiumProject';
  showSpinner: boolean;
  componentActivate = true;

  constructor(private store: Store<SpinnerState>) {}

  ngOnInit(): void {
    this.store.pipe(
      select(isSpinnerShowing),
      takeWhile(() => this.componentActivate))
      .subscribe(
          show => {
            this.showSpinner = show;
            console.log(this.showSpinner);
          }
      );
  }

  ngOnDestroy(): void {
    console.log('onDestroy AppComponent');
    this.componentActivate = false;
  }

}
