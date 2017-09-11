import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aem-host]',
})
export class AemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
