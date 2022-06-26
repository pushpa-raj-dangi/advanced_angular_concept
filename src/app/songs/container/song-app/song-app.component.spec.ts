import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongAppComponent } from './song-app.component';

describe('SongAppComponent', () => {
  let component: SongAppComponent;
  let fixture: ComponentFixture<SongAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
