import { SongAppComponent } from './songs/container/song-app/song-app.component';
import { SongsModule } from './songs/songs.module';
import { StoreExampleModule } from './store-example/store-example.module';
import { StoreComponent } from './store-example/store/store.component';
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

export const ROUTES: Routes = [
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'songs',
    component: SongAppComponent,
  },

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
    StoreExampleModule,
    SongsModule,
    RouterModule.forRoot(ROUTES),
  ],
  entryComponents: [AuthFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
