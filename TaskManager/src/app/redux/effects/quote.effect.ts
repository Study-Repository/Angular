import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { QuoteService } from '../../services/quote.service';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

import * as QuoteActions from '../../redux/actions/quote.action';

@Injectable()
export class QuoteEffect {

  @Effect()
  quote$: Observable<Action> = this.actions$
    .ofType(QuoteActions.ACTIONTYPE_REQUEST)
    // .map((action: QuoteActions.QuoteRequestAction) => action.payload)
    .switchMap(_ => {
      return this.quoteService.getQuote()
        .map(response => {
          const quote = response[Math.floor(Math.random() * response.length)];
          return new QuoteActions.QuoteSuccessAction(quote);
        })
        .catch(error => of(new QuoteActions.QuoteFailureAction(JSON.stringify(error))))
    });

  constructor(private actions$: Actions, private quoteService: QuoteService) {}
}
