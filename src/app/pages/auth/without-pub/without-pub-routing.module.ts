import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithoutPubPage } from './without-pub.page';

const routes: Routes = [
  {
    path: '',
    component: WithoutPubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithoutPubPageRoutingModule {}
