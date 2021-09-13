import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayingWithoutPubPageRoutingModule } from './paying-without-pub-routing.module';

import { PayingWithoutPubPage } from './paying-without-pub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayingWithoutPubPageRoutingModule
  ],
  declarations: [PayingWithoutPubPage]
})
export class PayingWithoutPubPageModule {}
