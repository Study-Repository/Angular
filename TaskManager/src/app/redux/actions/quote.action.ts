import { Action } from '@ngrx/store';
import {QuoteModel} from '../../domain/quote.model';

/**************↓↓↓↓↓️ Action Types ↓↓↓↓↓***************/
// 发送
export const ACTIONTYPE_REQUEST = '[Quote] Request';
// 成功
export const ACTIONTYPE_SUCCESS = '[Quote] Success';
// 失败
export const ACTIONTYPE_FAILURE = '[Quote] Failure';

/**************↓↓↓↓↓️ Actions ↓↓↓↓↓***************/
export class QuoteRequestAction implements Action {
  readonly type = ACTIONTYPE_REQUEST;

  constructor(public payload: null) {}
}

export class QuoteSuccessAction implements Action {
  readonly type = ACTIONTYPE_SUCCESS;

  /**
   * 成功请求到的Quote数据
   * @param {QuoteModel} payload
   */
  constructor(public payload: QuoteModel) {}
}

export class QuoteFailureAction implements Action {
  readonly type = ACTIONTYPE_FAILURE;

  /**
   * 请求失败的错误信息
   * @param {string} payload
   */
  constructor(public payload: string) {}
}

/**************↓↓↓↓↓️ Action 合集 ↓↓↓↓↓***************/
export type actions
  = QuoteRequestAction
  | QuoteSuccessAction
  | QuoteFailureAction
