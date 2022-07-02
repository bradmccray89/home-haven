import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeFromLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-150px)' }),
        animate(
          '1000ms 500ms ease-out',
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
    ]),
    trigger('fadeFromBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms 1300ms ease-out',
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
    ]),
  ],
})
export class NotFoundComponent {
  constructor() {}
}
