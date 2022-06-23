import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./example-two.component.scss'],
})
export class ExampleTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
