import { Mail } from './../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss'],
})
export class MailViewComponent implements OnInit {
  message!: Mail;
  constructor(private router: ActivatedRoute) {}
  hasUnSaved = true;

  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      this.message = data['message'];
    });
  }
}
