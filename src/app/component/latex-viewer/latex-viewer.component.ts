import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MathjaxService } from '../../service/mathjax.service';

@Component({
  selector: 'app-latex-viewer',
  template: `<div id="latex-container" [innerHTML]="latexCode"></div>`,
})
export class LatexViewerComponent implements AfterViewInit, OnChanges {
  @Input() latexCode: string = '';

  constructor(private mathJaxService: MathjaxService) {}

  ngAfterViewInit(): void {
    // 初期化後にMathJaxでレンダリング
    this.renderLatex();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['latexCode']) {
      this.renderLatex();
    }
  }

  private renderLatex(): void {
    // MathJaxによる数式のレンダリング
    if (this.latexCode) {
      this.mathJaxService.renderMath();
    }
  }
}
