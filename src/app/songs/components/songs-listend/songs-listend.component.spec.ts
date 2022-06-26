import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListendComponent } from './songs-listend.component';

describe('SongsListendComponent', () => {
  let component: SongsListendComponent;
  let fixture: ComponentFixture<SongsListendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsListendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
