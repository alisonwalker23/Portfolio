import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlresumeComponent } from './dlresume.component';

describe('DlresumeComponent', () => {
  let component: DlresumeComponent;
  let fixture: ComponentFixture<DlresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
