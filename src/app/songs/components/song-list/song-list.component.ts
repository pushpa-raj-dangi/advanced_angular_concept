import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'song-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="wrapper">
    <h3>
      <ng-content></ng-content>
    </h3>
    <ul class="list-group border-0">
      <li
        class="list-group-item d-flex justify-content-between border-0"
        [ngStyle]="{ 'background-color': item.listened ? '#e3e3e373' : '' }"
        *ngFor="let item of list; index as i"
      >
        <div>
          <h4 class="text-black-400">{{ item.artist }}</h4>
          <p class="text-muted">{{ item.title }}</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <i
            (click)="toggleItem(i, 'listened')"
            [ngStyle]="{
              color: item.listened ? 'red' : ''
            }"
            class="bi bi-headset mx-2"
          ></i>

          <i
            (click)="toggleItem(i, 'favorite')"
            class="bi {{
              item.favorite ? 'bi-heart-fill text-danger' : 'bi-heart'
            }} fa-2x"
          ></i>
        </div>
      </li>
    </ul>
  </div>`,
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit {
  @Input() list!: any;
  @Output() toggle = new EventEmitter<any>();

  ngOnInit(): void {}

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: { ...track, [prop]: !track[prop] },
    });
  }
}
