import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVisualizerComponent } from './content-visualizer.component';

describe('ContentVisualizerComponent', () => {
  let component: ContentVisualizerComponent;
  let fixture: ComponentFixture<ContentVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
