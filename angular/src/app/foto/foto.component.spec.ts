import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoComponent } from './foto.component';

describe('FotosComponent', () => {
  let component: FotoComponent;
  let fixture: ComponentFixture<FotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoComponent]
    });
    fixture = TestBed.createComponent(FotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
