import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as AuthActions from '../actions/auth.action';
import * as RouterActions from '../actions/router.action';

import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffect {

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(AuthActions.actionTypes.AUTH_LOGIN_REQUEST)
    .map((action: AuthActions.AuthLoginRequestAction) => action.payload)
    .switchMap(params => {
      console.log(params);
      return this.authService$.login(params)
        .map(response => {
          if (response.success) {
            return new AuthActions.AuthLoginSuccessAction({user: params, token: 'token'});
          } else {
            return new AuthActions.AuthLoginFailureAction(JSON.stringify('账号或密码错误'));
          }
        })
        .catch(error => Observable.of(new AuthActions.AuthLoginFailureAction(JSON.stringify(error))))
    });

  @Effect()
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.actionTypes.AUTH_LOGIN_SUCCESS)
    .map(_ => new RouterActions.Go({path: ['/project']}));

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(AuthActions.actionTypes.AUTH_LOGOUT)
    .map(_ => new RouterActions.Go({path: ['/login']}));

  constructor(private actions$: Actions, private authService$: AuthService) {}
}
