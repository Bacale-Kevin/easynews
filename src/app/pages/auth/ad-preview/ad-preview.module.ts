import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdPreviewPageRoutingModule } from './ad-preview-routing.module';

import { AdPreviewPage } from './ad-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdPreviewPageRoutingModule
  ],
  declarations: [AdPreviewPage]
})
export class AdPreviewPageModule {}
