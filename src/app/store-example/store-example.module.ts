import { Store } from './store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [CommonModule],
  providers: [Store],
})
export class StoreExampleModule {}
