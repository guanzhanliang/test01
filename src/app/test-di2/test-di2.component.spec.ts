import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDi2Component } from './test-di2.component';

describe('TestDi2Component', () => {
  let component: TestDi2Component;
  let fixture: ComponentFixture<TestDi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
