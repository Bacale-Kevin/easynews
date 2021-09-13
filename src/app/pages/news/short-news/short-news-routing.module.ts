import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortNewsPage } from './short-news.page';

const routes: Routes = [
  {
    path: '',
    component: ShortNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortNewsPageRoutingModule {}
