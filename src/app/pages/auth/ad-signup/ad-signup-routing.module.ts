import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdSignupPage } from './ad-signup.page';

const routes: Routes = [
  {
    path: '',
    component: AdSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdSignupPageRoutingModule {}
