import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteComponent implements OnInit {

  memberControl = new FormControl();

  items = [
    {id: 1, name: '晶晶'},
    {id: 2, name: '强强'},
    {id: 3, name: 'MT'}
  ];

  constructor() { }

  ngOnInit() {
  }

  displayFn(user: {id: number, name: string}) {
    return user ? user.name : '';
  }
}
