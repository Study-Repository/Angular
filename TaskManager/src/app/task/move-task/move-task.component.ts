import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-move-task',
  templateUrl: './move-task.component.html',
  styleUrls: ['./move-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveTaskComponent implements OnInit {

  lists = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
