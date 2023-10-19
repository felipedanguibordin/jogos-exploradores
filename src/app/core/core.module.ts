import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { login } from './login/login';
import 'boxicons';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from './componentes/componentes.module';
import { dashboard } from './dashboard/dashboard';
import { sugerir } from './sugerir/sugerir';
import { QueroJogar } from './quero-jogar/quero-jogar';

@NgModule({
  declarations: [login, dashboard, sugerir, QueroJogar],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class coreModule {}
