import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  avatars: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 16; i++) {
      this.avatars.push(`svg_avatars:svg-${i}`);
    }
  }

}
