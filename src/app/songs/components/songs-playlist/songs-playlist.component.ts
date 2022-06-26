import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'src/app/store-example/store';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.scss'],
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$!: Observable<any[]>;
  subscription!: Subscription;
  constructor(private store: Store, private songService: SongService) {}

  ngOnInit(): void {
    this.playlist$ = this.store.select('playlist');

    this.subscription = this.songService.getPlayList$.subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  toggle(item: any) {
    this.songService.toggle(item);
  }
}
