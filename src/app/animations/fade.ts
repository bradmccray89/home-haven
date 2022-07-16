import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(500, style({ opacity: 0 }))]),
]);

export const fadeFromBottom = trigger('fadeFromBottom', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate(
      '200ms 100ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(
      '200ms ease-out',
      style({ opacity: 0, transform: 'translateY(10px)' })
    ),
  ]),
]);

export const fadeFromLeft = trigger('fadeFromLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate(
      '500ms 100ms ease',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '500ms ease',
      style({ opacity: 0, transform: 'translateX(-20px)' })
    ),
  ]),
]);

export const fadeFromRight = trigger('fadeFromRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(20px)' }),
    animate(
      '500ms 100ms ease',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate('500ms ease', style({ opacity: 0, transform: 'translateX(20px)' })),
  ]),
]);
