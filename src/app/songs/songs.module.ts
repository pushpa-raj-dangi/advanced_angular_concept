import { SongListComponent } from './components/song-list/song-list.component';
import { SongService } from './services/song.service';
import { Store } from 'src/app/store-example/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesSongsComponent } from './components/favorites-songs/favorites-songs.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListendComponent } from './components/songs-listend/songs-listend.component';
import { SongAppComponent } from './container/song-app/song-app.component';

@NgModule({
  declarations: [
    FavoritesSongsComponent,
    SongsPlaylistComponent,
    SongsListendComponent,
    SongAppComponent,
    SongListComponent,
  ],
  imports: [CommonModule],
  providers: [Store, SongService],
})
export class SongsModule {}
