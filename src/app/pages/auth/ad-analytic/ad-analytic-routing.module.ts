import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAnalyticPage } from './ad-analytic.page';

const routes: Routes = [
  {
    path: '',
    component: AdAnalyticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAnalyticPageRoutingModule {}
