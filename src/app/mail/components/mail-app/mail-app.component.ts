import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate(event: any) {
    console.log(event);
  }
  activate(event: any) {
    console.log(event);
  }
}
