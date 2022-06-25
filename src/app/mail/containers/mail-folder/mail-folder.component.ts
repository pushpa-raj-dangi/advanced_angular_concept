import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss'],
})
export class MailFolderComponent implements OnInit {
  title!: string;
  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.data = data;
    });

    this.route.params.subscribe((data) => {
      this.title = data['name'];
    });
  }
}
