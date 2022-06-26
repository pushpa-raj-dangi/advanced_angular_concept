import { Component, OnInit } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  todos$ = this.store.select('todos');
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.set('todos', [
      { id: 1, name: 'Drink plenty of water' },
      { id: 2, name: 'Say hello to..' },
    ]);
  }
}
