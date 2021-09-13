import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdAnalyticPageRoutingModule } from './ad-analytic-routing.module';

import { AdAnalyticPage } from './ad-analytic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdAnalyticPageRoutingModule
  ],
  declarations: [AdAnalyticPage]
})
export class AdAnalyticPageModule {}
