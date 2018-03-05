import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

/**
 * 给Rxjs增加一个debug操作符
 * @param {string} message
 * @returns {Observable<any>}
 */
Observable.prototype.debug = function (message: string) {
  return this.do(
    (next) => {
      if (!environment.production) {
        console.log(message, next);
      }
    },
    (error) => {
      if (!environment.production) {
        console.error('ERROR>>', message, error);
      }
    },
    () => {
      if (!environment.production) {
        console.log('Completed>>');
      }
    }
  )
};
