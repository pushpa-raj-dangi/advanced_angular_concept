import { filter, map, Observable } from 'rxjs';
import { Store } from 'src/app/store-example/store';
import { SongService } from '../../services/song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-listend',
  templateUrl: './songs-listend.component.html',
  styleUrls: ['./songs-listend.component.scss'],
})
export class SongsListendComponent implements OnInit {
  listenedSong$!: Observable<any[]>;
  constructor(private songService: SongService, private store: Store) {}

  ngOnInit(): void {
    this.listenedSong$ = this.store
      .select('playlist')
      .pipe(filter(Boolean))
      .pipe(map((playlist) => playlist.filter((track: any) => track.listened)));
  }
  toggle(item: any) {
    this.songService.toggle(item);
  }
}
