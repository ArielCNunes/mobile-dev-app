import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSynopsisPage } from './movie-synopsis.page';

describe('MovieSynopsisPage', () => {
  let component: MovieSynopsisPage;
  let fixture: ComponentFixture<MovieSynopsisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSynopsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
