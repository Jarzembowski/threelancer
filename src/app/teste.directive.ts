// ./app/shared/if.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appTeste]' })
export class TesteDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set appTeste(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      console.log(this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

}
