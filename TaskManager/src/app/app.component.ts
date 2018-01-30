import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 开启黑夜模式, 默认关闭
  darkTheme = false;

  constructor(public overlayContainer: OverlayContainer) {}

  switchTheme(darkTheme) {
    // 设置主题
    this.darkTheme = darkTheme;

    // 全局设置OverlayContainer的主题
    if (darkTheme) {
      this.overlayContainer.getContainerElement().classList.toggle('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.toggle('light-theme');
    }
  }

}
