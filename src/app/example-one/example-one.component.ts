import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./example-one.component.scss'],
})
export class ExampleOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
