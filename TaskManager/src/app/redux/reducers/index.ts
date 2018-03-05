import { NgModule } from '@angular/core';

import { StoreModule, ActionReducerMap, combineReducers, compose } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as QuoteReducer from './quote.reducer';
import * as AuthReducer from './auth.reducer';
import { AuthModel } from '../../domain/auth.model';

import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';

import { createSelector } from 'reselect';

export interface State {
  quoteState: QuoteReducer.State,
  authState: AuthModel
}

const initialState: State = {
  quoteState: QuoteReducer.initialState,
  authState: AuthReducer.initialState
};

const reducers: ActionReducerMap<State> = {
  quoteState: QuoteReducer.reducer,
  authState: AuthReducer.reducer
};

/**
 * Selector: 取出QuoteState
 * @param {State} state
 * @returns {State}
 */
export const getQuoteState = (state: State) => state.quoteState;
export const getAuthState = (state: State) => state.authState;

/**
 * Selector: 取出QuoteState中的Quote数据
 * getQuoteState的结果会被传入QuoteReducer.getQuote
 */
export const getQuoteData = createSelector(getQuoteState, QuoteReducer.getQuote);

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      initialState: initialState
    }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppStoreModule {}
