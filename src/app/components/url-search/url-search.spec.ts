import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSearch } from './url-search';

describe('UrlSearch', () => {
  let component: UrlSearch;
  let fixture: ComponentFixture<UrlSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
