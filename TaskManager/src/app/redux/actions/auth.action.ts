import { Action } from '@ngrx/store';
import {AuthModel} from '../../domain/auth.model';
import {UserModel} from '../../domain/user.model';

/**************↓↓↓↓↓️ Action Types ↓↓↓↓↓***************/
export const actionTypes = {
  /**登录_发送*/
  AUTH_LOGIN_REQUEST: '[Auth] Login Request',
  /**登录_成功*/
  AUTH_LOGIN_SUCCESS: '[Auth] Login Success',
  /**登录_失败*/
  AUTH_LOGIN_FAILURE: '[Auth] Login Failure',

  /**注册_发送*/
  AUTH_REGISTER_REQUEST: '[Auth] Register Request',
  /**注册_成功*/
  AUTH_REGISTER_SUCCESS: '[Auth] Register Success',
  /**注册_失败*/
  AUTH_REGISTER_FAILURE: '[Auth] Register Failure',

  /**退出登录*/
  AUTH_LOGOUT: '[Auth] Logout'
};

/**************↓↓↓↓↓️ Actions ↓↓↓↓↓***************/
// 登录
export class AuthLoginRequestAction implements Action {
  type: string = actionTypes.AUTH_LOGIN_REQUEST;

  constructor(public payload: {email: string, password: string}) {}
}
export class AuthLoginSuccessAction implements Action {
  type: string = actionTypes.AUTH_LOGIN_SUCCESS;

  constructor(public payload: AuthModel) {}
}
export class AuthLoginFailureAction implements Action {
  type: string = actionTypes.AUTH_LOGIN_FAILURE;

  constructor(public payload: string) {}
}

// 注册
export class AuthRegisterRequestAction implements Action {
  type: string = actionTypes.AUTH_REGISTER_REQUEST;

  constructor(public payload: UserModel) {}
}
export class AuthRegisterSuccessAction implements Action {
  type: string = actionTypes.AUTH_REGISTER_SUCCESS;

  constructor(public payload: AuthModel) {}
}
export class AuthRegisterFailureAction implements Action {
  type: string = actionTypes.AUTH_REGISTER_FAILURE;

  constructor(public payload: string) {}
}

// 退出
export class AuthLogoutAction implements Action {
  type: string = actionTypes.AUTH_LOGOUT;

  constructor(public payload: null) {}
}

/**************↓↓↓↓↓️ Action 合集 ↓↓↓↓↓***************/
export type actions
  = AuthLoginRequestAction
  | AuthLoginSuccessAction
  | AuthLoginFailureAction
  | AuthRegisterRequestAction
  | AuthRegisterSuccessAction
  | AuthRegisterFailureAction
  | AuthLogoutAction
