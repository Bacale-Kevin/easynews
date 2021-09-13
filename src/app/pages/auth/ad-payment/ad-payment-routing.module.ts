import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdPaymentPage } from './ad-payment.page';

const routes: Routes = [
  {
    path: '',
    component: AdPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdPaymentPageRoutingModule {}
