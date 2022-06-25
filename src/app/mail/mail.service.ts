import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    let url =
      folder == 'all'
        ? 'http://localhost:3000/messages/'
        : `http://localhost:3000/messages/?folder=${folder}`;
    return this.http.get(url).pipe(map((response: any) => response));
  }

  getMessage(id: string): Observable<Mail> {
    return this.http
      .get(`http://localhost:3000/messages/${id}`)
      .pipe(map((response: any) => response));
  }
}
