import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerConfirmPage } from './partner-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerConfirmPageRoutingModule {}
