import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDirectiveComponent } from './loading-directive.component';

describe('LoadingDirectiveComponent', () => {
  let component: LoadingDirectiveComponent;
  let fixture: ComponentFixture<LoadingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
