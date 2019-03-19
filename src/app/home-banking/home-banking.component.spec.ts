import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBankingComponent } from './home-banking.component';

describe('HomeBankingComponent', () => {
  let component: HomeBankingComponent;
  let fixture: ComponentFixture<HomeBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
