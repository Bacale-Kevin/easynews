import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortNewsPageRoutingModule } from './short-news-routing.module';

import { ShortNewsPage } from './short-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortNewsPageRoutingModule
  ],
  declarations: [ShortNewsPage]
})
export class ShortNewsPageModule {}
