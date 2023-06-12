import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfopreratorComponent } from './ofoprerator.component';

describe('OfopreratorComponent', () => {
  let component: OfopreratorComponent;
  let fixture: ComponentFixture<OfopreratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfopreratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfopreratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
