import { StockInventoryService } from './services/stock-inventory.service';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StockCounterComponent } from './stock-counter/stock-counter.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    StockCounterComponent,
  ],
  providers: [StockInventoryService],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    StockCounterComponent,
  ],
})
export class StockInventoryModule {}
