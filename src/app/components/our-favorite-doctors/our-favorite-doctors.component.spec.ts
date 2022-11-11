import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFavoriteDoctorsComponent } from './our-favorite-doctors.component';

describe('OurFavoriteDoctorsComponent', () => {
  let component: OurFavoriteDoctorsComponent;
  let fixture: ComponentFixture<OurFavoriteDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFavoriteDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFavoriteDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
