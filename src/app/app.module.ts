import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { Routes, RouterModule } from '@angular/router';
import { MailModule } from './mail/mail.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-form/auth-message/auth-message.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { ToolTipDirective } from './directives/tool-tip.directive';
import { MyForDirective } from './directives/my-for.directive';
import { AuthService } from './auth/auth.service';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    CreditCardDirective,
    ToolTipDirective,
    MyForDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StockInventoryModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES),
  ],
  entryComponents: [AuthFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
