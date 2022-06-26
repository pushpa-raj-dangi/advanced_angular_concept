import { Store } from '../../../store-example/store';
import { filter, map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-favorites-songs',
  templateUrl: './favorites-songs.component.html',
  styleUrls: ['./favorites-songs.component.scss'],
})
export class FavoritesSongsComponent implements OnInit {
  listenedSong$!: Observable<any[]>;
  constructor(private songService: SongService, private store: Store) {}

  ngOnInit(): void {
    this.listenedSong$ = this.store
      .select('playlist')
      .pipe(filter(Boolean))
      .pipe(map((playlist) => playlist.filter((track: any) => track.favorite)));
  }

  toggle(item: any) {
    this.songService.toggle(item);
  }
}
