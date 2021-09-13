import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormShortNewsPage } from './form-short-news.page';

const routes: Routes = [
  {
    path: '',
    component: FormShortNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormShortNewsPageRoutingModule {}
