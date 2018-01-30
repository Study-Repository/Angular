import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {MoveTaskComponent} from '../move-task/move-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {routerAnimation} from '../../animations/router.animation';
import {fabButtonAnimation} from '../../animations/fabButton.animation';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    routerAnimation,
    fabButtonAnimation
  ]
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 吃饭',
          complete: true,
          priority: 1,
          owner: {
            id: 1,
            name: '一',
            avatar: 'svg_avatars:svg-13'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          complete: false,
          priority: 2,
          owner: {
            id: 1,
            name: '二',
            avatar: 'svg_avatars:svg-12'
          },
          dueDate: new Date()
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一: 项目代码检查',
          complete: false,
          priority: 3,
          owner: {
            id: 1,
            name: '一',
            avatar: 'svg_avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 项目代码评审项目代码评审项目代码评审',
          complete: true,
          priority: 3,
          owner: {
            id: 1,
            name: '二',
            avatar: 'svg_avatars:svg-12'
          },
          dueDate: new Date()
        },
      ]
    }
  ];

  @HostBinding('@routerAnimation') routerAnimation;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onNewTaskAction() {
    this.dialog.open(NewTaskComponent);
  }

  onMoveListAction() {
    this.dialog.open(MoveTaskComponent, {data: {lists: this.lists}});
  }

  onDeleteListAction() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '确认删除任务列表?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  onModifyListAction() {
    let dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  onItemClickedAction(task) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  onAddTaskListAction() {
    let dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
