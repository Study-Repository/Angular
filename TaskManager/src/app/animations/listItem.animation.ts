import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const listItemAnimation = trigger('listItemAnimation', [
  transition('* <=> *', [
    query(':enter', style({'opacity': '0'}), {optional: true}),
    query(':enter', stagger(500, animate('1s', style({'opacity': '1'}))), {optional: true}),
    query(':leave', style({'opacity': '1'}), {optional: true}),
    query(':leave', stagger(500, animate('1s', style({'opacity': '0'}))), {optional: true})
  ])
]);
