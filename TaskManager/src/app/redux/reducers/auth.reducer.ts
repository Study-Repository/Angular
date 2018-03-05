import { AuthModel } from '../../domain/auth.model';
import * as AuthActions from '../actions/auth.action';
import {State} from './quote.reducer';

/**
 * 初始状态
 */
export const initialState: AuthModel = {};

/**
 * Reducer
 */
export function reducer(state: AuthModel = initialState, action: AuthActions.actions): AuthModel {
  console.log('Auth_Reducer');
  // 配置信息
  switch (action.type) {
    // 成功
    case AuthActions.actionTypes.AUTH_LOGIN_SUCCESS:
    case AuthActions.actionTypes.AUTH_REGISTER_SUCCESS: {
      return {...<AuthModel>action.payload};
    }
    // 失败
    case AuthActions.actionTypes.AUTH_LOGIN_FAILURE:
    case AuthActions.actionTypes.AUTH_REGISTER_FAILURE: {
      return initialState;
    }
    // 其他
    default: {
      return state;
    }
  }
}
