import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskComponent implements OnInit {

  priorities = [
    {
      label: '紧急',
      value: 1
    },
    {
      label: '重要',
      value: 2
    },
    {
      label: '普通',
      value: 3
    }
  ];

  title = '新建任务';
  task = {};

  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title;
      this.task = this.data.task;
    }
  }

}
