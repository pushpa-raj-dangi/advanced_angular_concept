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
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  entryComponents: [AuthFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
