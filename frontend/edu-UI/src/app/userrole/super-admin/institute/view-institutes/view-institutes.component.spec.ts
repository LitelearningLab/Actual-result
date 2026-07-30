import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewInstitutesComponent } from './view-institutes.component';

describe('ViewInstitutesComponent', () => {
  let component: ViewInstitutesComponent;
  let fixture: ComponentFixture<ViewInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInstitutesComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ViewInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });

  it('should clear sector when industry changes', () => {
    component.filters.industry = 'College';
    component.filters.sector = 'Engineering';
    component.sectorSearch = 'Eng';

    component.onIndustryFilterChange();

    expect(component.filters.sector).toBe('');
    expect(component.sectorSearch).toBe('');
  });
});
