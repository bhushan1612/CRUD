import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewdataComponent } from './studentviewdata.component';

describe('StudentviewdataComponent', () => {
  let component: StudentviewdataComponent;
  let fixture: ComponentFixture<StudentviewdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
