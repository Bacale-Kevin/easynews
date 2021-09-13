import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdPortalPageRoutingModule } from './ad-portal-routing.module';

import { AdPortalPage } from './ad-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdPortalPageRoutingModule
  ],
  declarations: [AdPortalPage]
})
export class AdPortalPageModule {}
