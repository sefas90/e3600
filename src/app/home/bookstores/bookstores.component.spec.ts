import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoresComponent } from './bookstores.component';

describe('BookstoresComponent', () => {
  let component: BookstoresComponent;
  let fixture: ComponentFixture<BookstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
