import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUserPage } from './about-user.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUserPageRoutingModule {}
