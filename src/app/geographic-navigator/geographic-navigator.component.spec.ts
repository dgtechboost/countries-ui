import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../state/app.state';

import { GeographicNavigatorComponent } from './geographic-navigator.component';

describe('GeographicNavigatorComponent', () => {
  let component: GeographicNavigatorComponent;
  let fixture: ComponentFixture<GeographicNavigatorComponent>;
  const initialState = {} as AppState;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographicNavigatorComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
