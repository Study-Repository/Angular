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

import { ServicesModule } from '../services/services.module';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import '../utils/debug.util';

import { AppStoreModule } from '../redux/reducers';
import { AppEffectsModule } from '../redux/effects';

@NgModule({
  imports: [
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ServicesModule.forRoot(),
    AppStoreModule,
    AppEffectsModule,
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
  ],
  providers: [
    {provide: 'BASE_CONFIG', useValue: {
        uri: 'http://192.168.10.168:8080',
      }
    }
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
