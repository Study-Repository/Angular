import {animate, state, style, transition, trigger} from '@angular/animations';

export const cardAnimation = trigger('cardHover', [
  state('normal', style({transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style({transform: 'scale(1.02)', 'box-shadow': '3px 3px 5px 6px #ccc'})),
  transition('normal => hover', animate('100ms ease-in')),
  transition('hover => normal', animate('100ms ease-out'))
]);
