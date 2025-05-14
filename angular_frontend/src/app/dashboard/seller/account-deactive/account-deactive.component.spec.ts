import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeactiveComponent } from './account-deactive.component';

describe('AccountDeactiveComponent', () => {
  let component: AccountDeactiveComponent;
  let fixture: ComponentFixture<AccountDeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDeactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
