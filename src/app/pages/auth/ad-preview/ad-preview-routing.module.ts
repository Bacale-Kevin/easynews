import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdPreviewPage } from './ad-preview.page';

const routes: Routes = [
  {
    path: '',
    component: AdPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdPreviewPageRoutingModule {}
