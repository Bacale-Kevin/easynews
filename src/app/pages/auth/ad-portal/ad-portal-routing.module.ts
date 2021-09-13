import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdPortalPage } from './ad-portal.page';

const routes: Routes = [
  {
    path: '',
    component: AdPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdPortalPageRoutingModule {}
