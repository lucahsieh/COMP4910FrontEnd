import { Component, OnInit, Input } from '@angular/core';

import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(0)', opacity: 0 }),
        animate('1000ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1000ms', style({ transform: 'translateX(0)', opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      state('true', style({
        overflow: 'hidden',
        height: '*',
        width: '260px'
      })),
      state('false', style({
        opacity: '0',
        overflow: 'hidden',
        height: '*',
        width: '65px'
      })),
      transition('true => false', animate('400ms ease-in-out')),
      transition('false => true', animate('400ms ease-in-out'))
    ])
  ],
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  @Input() showFiller: boolean;

  constructor(
  ) { }

  ngOnInit() {


  }




}
