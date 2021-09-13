import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdPaymentPageRoutingModule } from './ad-payment-routing.module';

import { AdPaymentPage } from './ad-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdPaymentPageRoutingModule
  ],
  declarations: [AdPaymentPage]
})
export class AdPaymentPageModule {}
