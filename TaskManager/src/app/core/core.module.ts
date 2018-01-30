import {NgModule, Optional, SkipSelf} from '@angular/core';

// component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// http
import { HttpModule } from '@angular/http';

// 加载svg资源
import { loadSvgResources } from '../utils/svg.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AppRoutingModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(
      @Optional() @SkipSelf() parent: CoreModule,
      iconRegistry: MatIconRegistry,
      domSanitizer: DomSanitizer
    ) {
    // 只初始化一次module
    if (parent) {
      console.log('CoreModule已经存在, 只能加载一次!');
      throw new Error('CoreModule已经存在, 只能加载一次!');
    }
    console.log('加载CoreModule');
    // 加载svg资源
    loadSvgResources(iconRegistry, domSanitizer);
  }
}
