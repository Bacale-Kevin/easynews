import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerPaymentPage } from './partner-payment.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerPaymentPageRoutingModule {}
