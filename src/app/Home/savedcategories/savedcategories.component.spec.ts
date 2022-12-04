import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcategoriesComponent } from './savedcategories.component';

describe('SavedcategoriesComponent', () => {
  let component: SavedcategoriesComponent;
  let fixture: ComponentFixture<SavedcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
