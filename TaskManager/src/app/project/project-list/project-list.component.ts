import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {routerAnimation} from '../../animations/router.animation';
import {listItemAnimation} from '../../animations/listItem.animation';
import {commonAnimation} from '../../animations/common.animation';
import {fabButtonAnimation} from '../../animations/fabButton.animation';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    routerAnimation,
    listItemAnimation,
    commonAnimation,
    fabButtonAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      id: 0,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/imgs/covers/0.jpg'
    },
    {
      id: 1,
      'name': '自动化测试项目',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/imgs/covers/1.jpg'
    }
  ];

  @HostBinding('@routerAnimation') routerAnimation;

  constructor(public dialog: MatDialog, public cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // 添加
  openNewProjectDialog() {
    let dialogRef = this.dialog.open(NewProjectComponent, {
      position: {left: '0', top: '0'},
      data: {
        dark: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('接收到dialog关闭是发送的消息: ' + result);
      this.projects = [...this.projects, {
        id: this.projects.length,
        'name': '企业协作平台',
        'desc': '这是一个企业内部项目',
        'coverImg': `assets/imgs/covers/${this.projects.length}.jpg`
      }, {
        id: this.projects.length,
        'name': '企业协作平台',
        'desc': '这是一个企业内部项目',
        'coverImg': `assets/imgs/covers/${this.projects.length}.jpg`
      }];
      this.cd.markForCheck();
    })
  }

  inviteAction() {
    this.dialog.open(InviteComponent);
  }

  // 删除
  deleteAction(project) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '确认删除该项目?'}});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.projects.filter(item => item.id != project.id);
      }
    });
  }

}
