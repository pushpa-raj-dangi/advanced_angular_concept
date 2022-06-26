import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSongsComponent } from './favorites-songs.component';

describe('FavoritesSongsComponent', () => {
  let component: FavoritesSongsComponent;
  let fixture: ComponentFixture<FavoritesSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
