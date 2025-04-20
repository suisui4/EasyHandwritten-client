import { Injectable } from '@angular/core';

declare var MathJax: any;

@Injectable({
  providedIn: 'root'
})
export class MathjaxService {
  renderMath() {
    if (window.MathJax) {
      MathJax.typesetPromise()
        .then(() => console.log('MathJax rendered'))
        .catch((err: any) => console.error('MathJax render error', err));
    }
  }
}
