import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canLoad() {
    return this.authService.checkPersmission();
  }
  canActivate() {
    return this.authService.isLoggedIn();
  }
  canActivateChild() {
    return true;
  }
}
