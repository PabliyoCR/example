import { NgModule } from '@angular/core';
import { ExternalLinkDirective } from '../../../shared/directives/external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  exports: [ExternalLinkDirective],
})
export class ExternalLinkModule {}
