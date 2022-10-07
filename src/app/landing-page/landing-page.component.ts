import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  imageSrc =
    'https://user.oc-static.com/upload/2021/11/11/16366495596929_snapface.png';
  constructor() {}

  ngOnInit() {}
}
