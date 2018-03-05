import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    console.log(this.data);

    // 在app.component中统一进行主题设置
    // if (this.data.dark) {
    //   this.overlayContainer.getContainerElement().classList.toggle('dark-theme');
    // } else {
    //   this.overlayContainer.getContainerElement().classList.toggle('light-theme');
    // }
  }

  // 保存
  onSaveAction() {
    this.dialogRef.close('我是关闭的消息');
  }

}
