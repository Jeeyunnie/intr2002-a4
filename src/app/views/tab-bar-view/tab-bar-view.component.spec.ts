import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarViewComponent } from './tab-bar-view.component';

describe('TabBarViewComponent', () => {
  let component: TabBarViewComponent;
  let fixture: ComponentFixture<TabBarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
