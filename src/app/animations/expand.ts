import { trigger, transition, style, animate } from '@angular/animations';

export const expand = trigger('expand', [
  transition(':enter', [
    style({ height: '0px', opacity: 0.5 }),
    animate('200ms ease-in', style({ height: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate('200ms ease-in', style({ height: '0px', opacity: 0.5 })),
  ]),
]);
