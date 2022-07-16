import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms 200ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms ease-in', style({ opacity: 0 })),
  ]),
]);

export const fadeFromLeft = trigger('fadeFromLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-150px)' }),
    animate(
      '1000ms 700ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '1000ms ease-out',
      style({ opacity: 0, transform: 'translateX(-150px)' })
    ),
  ]),
]);

export const fadeFromBottom = trigger('fadeFromBottom', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '300ms 1500ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate(
      '1200ms ease-out',
      style({ opacity: 0, transform: 'translateY(20px)' })
    ),
  ]),
]);
