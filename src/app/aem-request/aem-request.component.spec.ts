import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AemRequestComponent } from './aem-request.component';

describe('AemRequestComponent', () => {
  let component: AemRequestComponent;
  let fixture: ComponentFixture<AemRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AemRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AemRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
