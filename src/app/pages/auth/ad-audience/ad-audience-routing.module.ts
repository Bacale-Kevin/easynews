import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAudiencePage } from './ad-audience.page';

const routes: Routes = [
  {
    path: '',
    component: AdAudiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAudiencePageRoutingModule {}
