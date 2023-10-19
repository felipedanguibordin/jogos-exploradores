import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { headerComponent } from './header/header';

@NgModule({
  declarations: [headerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [headerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentesModule {}
