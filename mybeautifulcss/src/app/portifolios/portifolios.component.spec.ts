import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifoliosComponent } from './portifolios.component';

describe('PortifoliosComponent', () => {
  let component: PortifoliosComponent;
  let fixture: ComponentFixture<PortifoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortifoliosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortifoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
