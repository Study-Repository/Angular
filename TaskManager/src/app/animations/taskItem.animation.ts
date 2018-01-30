import {animate, state, style, transition, trigger} from '@angular/animations';

export const taskItemAnimation = trigger('taskItemHover', [
  state('normal', style({'border-left-width': '3px'})),
  state('hover', style({'border-left-width': '8px'})),
  transition('normal <=> hover', animate('100ms ease-in')),
]);
