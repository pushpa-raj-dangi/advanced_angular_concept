import { MailviewGuard } from './components/mail-view/mail-view.guard';
import { AuthGuard } from './../auth/auth.guard';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderResolver } from './containers/mail-folder/mail-folder.resolver';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailService } from './mail.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MailViewResolver } from './components/mail-view/mail-view.resolver';
const routes: Routes = [
  // { path: '', redirectTo: '/folder/all', pathMatch: 'full' },
  {
    path: 'mail',
    component: MailAppComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,

        resolve: { messages: MailFolderResolver },
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        resolve: { message: MailViewResolver },
        canDeactivate: [MailviewGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [MailAppComponent, MailFolderComponent, MailItemComponent],
  providers: [MailService, MailFolderResolver, MailViewResolver, MailviewGuard],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [MailAppComponent, MailFolderComponent, MailItemComponent],
})
export class MailModule {}
