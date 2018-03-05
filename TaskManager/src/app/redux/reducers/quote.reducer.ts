import * as QuoteActions from '../actions/quote.action';
import { QuoteModel } from '../../domain/quote.model';

/**
 * 定义State
 */
export interface State {
  quote: QuoteModel;
}

/**
 * 初始化State
 */
export const initialState: State = {
  quote: {
    "id": "5",
    "cn": "当你最终放开了过去，更好的事就会到来。",
    "en": "When you finally let go of the past, something better comes along.",
    "pic": "quote_placeholder.jpg"
  }
};

/**
 * Reducer
 */
export function reducer(state = initialState, action: QuoteActions.actions):State {
  switch (action.type) {
    case QuoteActions.ACTIONTYPE_SUCCESS: {
      // 类型转换: <QuoteModel>action.payload} ==> action.payload转换为QuoteModel类型
      return {...state, quote: <QuoteModel>action.payload};
    }
    case QuoteActions.ACTIONTYPE_FAILURE:
    default: {
      return state;
    }
  }
}

/**
 * Selector: 取出QuoteState中的quote数据
 * @param {State} state
 * @returns {QuoteModel}
 */
export const getQuote = (state: State) => state.quote;
