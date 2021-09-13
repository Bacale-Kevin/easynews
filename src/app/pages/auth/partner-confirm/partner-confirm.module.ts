import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerConfirmPageRoutingModule } from './partner-confirm-routing.module';

import { PartnerConfirmPage } from './partner-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerConfirmPageRoutingModule
  ],
  declarations: [PartnerConfirmPage]
})
export class PartnerConfirmPageModule {}
