import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) => {
  console.log('加载svg资源');

  // 通用地址
  let imgPath = 'assets/imgs';

  // sidebar
  let sidebarPath = `${imgPath}/sidebar`;
  iconRegistry.addSvgIcon('svg_sidebar_day', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarPath}/day.svg`));
  iconRegistry.addSvgIcon('svg_sidebar_week', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarPath}/week.svg`));
  iconRegistry.addSvgIcon('svg_sidebar_month', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarPath}/month.svg`));
  iconRegistry.addSvgIcon('svg_sidebar_project', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarPath}/project.svg`));
  iconRegistry.addSvgIcon('svg_sidebar_projects', domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarPath}/projects.svg`));
  // sidebar_每天的日期svg
  let sidebarDayPath = `${imgPath}/days`;
  for (let i = 1; i <= 31; i++) {
    iconRegistry.addSvgIcon(`svg_sidebar_day${i}`, domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDayPath}/day${i}.svg`));
  }

  // avatar
  let avatarPath = `${imgPath}/avatar`;
  iconRegistry.addSvgIconSetInNamespace(`svg_avatars`, domSanitizer.bypassSecurityTrustResourceUrl(`${avatarPath}/avatars.svg`));
  iconRegistry.addSvgIcon(`svg_unassigned`, domSanitizer.bypassSecurityTrustResourceUrl(`${avatarPath}/unassigned.svg`));

  // icon
  let iconPath = `${imgPath}/icons`;
  iconRegistry.addSvgIcon('svg_icon_move', domSanitizer.bypassSecurityTrustResourceUrl(`${iconPath}/move.svg`));
  iconRegistry.addSvgIcon('svg_icon_add', domSanitizer.bypassSecurityTrustResourceUrl(`${iconPath}/add.svg`));
  iconRegistry.addSvgIcon('svg_icon_delete', domSanitizer.bypassSecurityTrustResourceUrl(`${iconPath}/delete.svg`));
};
