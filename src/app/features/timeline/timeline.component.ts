import { Component } from '@angular/core';
import { Prescr } from '../../shared/models/prescr';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})

export class TimelineComponent {
  prescr: Prescr[] = [
    new Prescr({
      id: 1,
      name: "Prescription 1",
      user: {
        firstName: "Joe",
        lastName: "Bloggs",
        email: "email@email.com",
        // username: "joebloggs"
      }
    })
  ];

  constructor() {

  }
}
