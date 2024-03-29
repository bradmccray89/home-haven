import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDocumentsComponent } from './tenant-documents.component';

describe('TenantDocumentsComponent', () => {
  let component: TenantDocumentsComponent;
  let fixture: ComponentFixture<TenantDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantDocumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenantDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
