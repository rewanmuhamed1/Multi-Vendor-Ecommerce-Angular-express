import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveSellersComponent } from './deactive-sellers.component';

describe('DeactiveSellersComponent', () => {
  let component: DeactiveSellersComponent;
  let fixture: ComponentFixture<DeactiveSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeactiveSellersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactiveSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
