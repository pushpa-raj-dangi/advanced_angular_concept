import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [],
  providers: [AuthService, AuthGuard],
  imports: [CommonModule],
})
export class AuthModule {}
