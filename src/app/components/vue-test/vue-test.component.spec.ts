import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTestComponent } from './vue-test.component';

describe('VueTestComponent', () => {
  let component: VueTestComponent;
  let fixture: ComponentFixture<VueTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
