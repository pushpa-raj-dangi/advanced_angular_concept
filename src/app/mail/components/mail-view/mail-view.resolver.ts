import { MailService } from './../../mail.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';
import { Injectable } from '@angular/core';
@Injectable()
export class MailViewResolver implements Resolve<Mail> {
  constructor(private mailService: MailService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.mailService.getMessage(route.params['id']);
  }
}
