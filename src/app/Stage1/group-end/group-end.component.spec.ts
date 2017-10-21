import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEndComponent } from './group-end.component';

describe('GroupEndComponent', () => {
  let component: GroupEndComponent;
  let fixture: ComponentFixture<GroupEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
