import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayingWithoutPubPage } from './paying-without-pub.page';

const routes: Routes = [
  {
    path: '',
    component: PayingWithoutPubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayingWithoutPubPageRoutingModule {}
