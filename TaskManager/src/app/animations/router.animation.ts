import {animate, state, style, transition, trigger} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
  state('void', style({'position': 'fixed', 'height': '80%', 'width': '100%'})),
  state('*', style({'position': 'fixed', 'height': '80%', 'width': '100%'})),
  transition(':enter', [
    style({'transform': 'translateX(-100%)', 'opacity': '0'}),
    animate('.5s ease-in-out', style({'transform': 'translateX(0)', 'opacity': '1'}))
  ]),
  transition(':leave', [
    style({'transform': 'translateX(0)', 'opacity': '1'}),
    animate('.5s ease-in-out', style({'transform': 'translateX(100%)', 'opacity': '0'}))
  ])
]);
