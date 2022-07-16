import { Component } from '@angular/core';
import {
  fadeFromBottom,
  fadeFromLeft,
  fadeInOut,
} from 'src/app/animations/not-found-fade';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [fadeInOut, fadeFromBottom, fadeFromLeft],
})
export class NotFoundComponent {
  constructor() {}
}
