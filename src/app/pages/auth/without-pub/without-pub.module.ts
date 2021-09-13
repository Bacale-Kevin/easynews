import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithoutPubPageRoutingModule } from './without-pub-routing.module';

import { WithoutPubPage } from './without-pub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithoutPubPageRoutingModule
  ],
  declarations: [WithoutPubPage]
})
export class WithoutPubPageModule {}
