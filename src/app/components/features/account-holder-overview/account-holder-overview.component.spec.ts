import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderOverviewComponent } from './account-holder-overview.component';

describe('AccountHolderOverviewComponent', () => {
  let component: AccountHolderOverviewComponent;
  let fixture: ComponentFixture<AccountHolderOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountHolderOverviewComponent]
    });
    fixture = TestBed.createComponent(AccountHolderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
