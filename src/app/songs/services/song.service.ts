import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Store } from 'src/app/store-example/store';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  getPlayList$ = this.http
    .get('http://localhost:3000/playlist')
    .pipe(map((res) => res))
    .pipe(tap((next) => this.store.set('playlist', next)));

  toggle(item: any) {
    this.http
      .put(`http://localhost:3000/playlist/${item?.track?.id}`, item.track)
      .pipe(map((res) => res))
      .subscribe((track) => {
        const value = this.store.value.playlist;
        const playList = value.map((song: any) => {
          if (item.track.id === song.id) {
            return { ...song, ...item.track };
          } else {
            return song;
          }
        });

        this.store.set('playlist', playList);
      });
  }
  constructor(private http: HttpClient, private store: Store) {}
}
