import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerplayOperatorComponent } from './sharerplay-operator.component';

describe('SharerplayOperatorComponent', () => {
  let component: SharerplayOperatorComponent;
  let fixture: ComponentFixture<SharerplayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharerplayOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharerplayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
