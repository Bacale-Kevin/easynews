import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdDashboardPage } from './ad-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AdDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdDashboardPageRoutingModule {}
