import {animate, style, transition, trigger} from '@angular/animations';

export const fabButtonAnimation = trigger('fabButtonAnimation', [
  transition(
    '* => pop',
    [
    style({'bottom': '300px', 'opacity': '0'}),
    animate(
      '600ms 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      style({'bottom': '50px', 'opacity': '1'})
    )
  ])
]);
