import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAConsultantComponent } from './get-a-consultant.component';

describe('GetAConsultantComponent', () => {
  let component: GetAConsultantComponent;
  let fixture: ComponentFixture<GetAConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
