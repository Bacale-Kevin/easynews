import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdDashboardPageRoutingModule } from './ad-dashboard-routing.module';

import { AdDashboardPage } from './ad-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdDashboardPageRoutingModule
  ],
  declarations: [AdDashboardPage]
})
export class AdDashboardPageModule {}
