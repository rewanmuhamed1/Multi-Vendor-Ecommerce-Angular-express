import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersRequestComponent } from './sellers-request.component';

describe('SellersRequestComponent', () => {
  let component: SellersRequestComponent;
  let fixture: ComponentFixture<SellersRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellersRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
