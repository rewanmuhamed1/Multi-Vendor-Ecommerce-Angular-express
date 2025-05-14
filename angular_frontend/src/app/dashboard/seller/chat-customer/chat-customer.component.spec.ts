import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCustomerComponent } from './chat-customer.component';

describe('ChatCustomerComponent', () => {
  let component: ChatCustomerComponent;
  let fixture: ComponentFixture<ChatCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
