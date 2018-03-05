import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store } from '@ngrx/store';
import * as RootReducer from '../../redux/reducers';
import * as AuthActions from '../../redux/actions/auth.action';
import {AuthModel} from '../../domain/auth.model';
import {Observable} from 'rxjs/Observable';
import {getAuthState} from '../../redux/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth$: Observable<AuthModel>;

  @Output()
  toggle = new EventEmitter<void>();

  @Output()
  switchTheme = new EventEmitter<Boolean>();

  constructor(private store$: Store<RootReducer.State>) {
    this.auth$ = this.store$.select(getAuthState);
  }

  ngOnInit() {
  }

  openSideBar() {
    this.toggle.emit();
  }

  onSwitchTheme(checked: Boolean) {
    this.switchTheme.emit(checked);
  }

  logoutAction() {
    this.store$.dispatch(
      new AuthActions.AuthLogoutAction(null)
    );
  }
}
