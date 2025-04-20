import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeHistoryComponent } from './judge-history.component';

describe('JudgeHistoryComponent', () => {
  let component: JudgeHistoryComponent;
  let fixture: ComponentFixture<JudgeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgeHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
