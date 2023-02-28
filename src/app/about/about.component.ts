import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //name = 'Angular ' + VERSION.major;
  appName = 'Antonella Pineda';

  contact: string = 'Subject';
  appliedCSSClass = 'orange';
  notappliedCSSClass = false;
  myColor = '#5F5F5F';

  // for two-way data binding demo
  // name = ''; lab 6
  email = '';
  message = '';

  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  //ngFor Demo
  items = ['Filipino, ', 'Kapampangan, ', 'English'];

  //ngIf Demo
  showElement = false;

  //ngStyle
  color = 'orange';

  //ngModel
  name = '';

  //ngClass
  isBold = false;
  isItalic = false;

  isValid: boolean = true;
  isNot: boolean = false;
}
