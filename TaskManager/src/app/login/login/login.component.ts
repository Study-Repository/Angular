import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {QuoteModel} from '../../domain/quote.model';
import {Observable} from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as RootReducer from '../../redux/reducers';
import * as QuoteActions from '../../redux/actions/quote.action';
import * as AuthActions from '../../redux/actions/auth.action';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  // quote: QuoteModel = {
  //   "id": "5",
  //   "cn": "当你最终放开了过去，更好的事就会到来。",
  //   "en": "When you finally let go of the past, something better comes along.",
  //   "pic": "quote_placeholder.jpg"
  // };

  quote$: Observable<QuoteModel>;

  constructor(
    private testService$: TestService,
    private quoteService$: QuoteService,
    private authService$: AuthService,
    private store$: Store<RootReducer.State>) { }

  ngOnInit() {
    // 初始化formGroup
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.required)
    });

    // 订阅quote的改变_普通写法
    // this.quote$ = this.store$.select(state => {
    //   return RootReducer.getQuoteData(state);
    // });
    // 订阅quote的改变_简写
    this.quote$ = this.store$.select(RootReducer.getQuoteData);

    // 发送开始请求的action
    this.store$.dispatch(new QuoteActions.QuoteRequestAction(null));

    // 请求quote数据
    // this.quoteService$.getQuote()
    //   .subscribe(response => {
    //     // 没有使用Redux
    //     // this.quote = response[Math.floor(Math.random() * 4)];
    //
    //     // Redux方式一_简易Action
    //     // this.store$.dispatch(
    //     //   {
    //     //       type: QuoteActions.QUOTE_SUCCESS,
    //     //       payload: response[Math.floor(Math.random() * response.length)]
    //     //     }
    //     //   );
    //
    //     // Redux方式二_强类型Action
    //     const quote = response[Math.floor(Math.random() * response.length)];
    //     this.store$.dispatch(
    //       new QuoteActions.QuoteSuccessAction(quote)
    //     )
    //   });
  }

  // 请求测试
  loginAction() {
    console.log('开始登录');
    this.testService$.getStudentList()
      .subscribe(response => {
        console.log(response.studentList);
      })
  }

  onSubmit(formGroup: FormGroup, event: Event) {
    event.preventDefault();

    // this.store$.dispatch(
    //   new AuthActions.AuthLoginRequestAction({email: 'xxx', password: 'xxx'})
    // );

    // this.authService$.login({email: '2', password: '1'})
    //   .subscribe(response => {
    //     console.log(response);
    //   });

    this.store$.dispatch(
      new AuthActions.AuthLoginRequestAction(formGroup.value)
    );
  }
}
