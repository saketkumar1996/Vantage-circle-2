import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightNumber]',
})
export class HighlightNumberDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const words = this.el.nativeElement.innerHTML.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (!isNaN(words[i])) {
        words[i] = `<mark>${words[i]}</mark>`;
      }
    }
    this.el.nativeElement.innerHTML = words.join(' ');
  }
}