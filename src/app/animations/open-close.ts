import {
  animation,
  style,
  animate,
  trigger,
  transition,
  state,
} from '@angular/animations';

export const transitionAnimation = animation([
  trigger('fade', [
    state('show', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('show <=> hide', animate('500ms ease-out')),
  ]),
]);
