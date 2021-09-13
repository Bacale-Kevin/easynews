import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerPaymentPageRoutingModule } from './partner-payment-routing.module';

import { PartnerPaymentPage } from './partner-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerPaymentPageRoutingModule
  ],
  declarations: [PartnerPaymentPage]
})
export class PartnerPaymentPageModule {}
