import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './core/login/login';
import { dashboard } from './core/dashboard/dashboard';
import { QueroJogar } from './core/quero-jogar/quero-jogar';
import { sugerir } from './core/sugerir/sugerir';

const routes: Routes = [
  {
    path: '',
    component: login,
  },
  {
    path: 'dashboard',
    component: dashboard,
  },
  {
    path: 'sugerir',
    component: sugerir,
  },
  {
    path: 'quero-jogar',
    component: QueroJogar,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
