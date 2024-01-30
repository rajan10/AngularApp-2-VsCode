import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentTsComponent } from './mycomponent.ts.component';

describe('MycomponentTsComponent', () => {
  let component: MycomponentTsComponent;
  let fixture: ComponentFixture<MycomponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycomponentTsComponent]
    });
    fixture = TestBed.createComponent(MycomponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
