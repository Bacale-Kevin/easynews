import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormShortNewsPageRoutingModule } from './form-short-news-routing.module';

import { FormShortNewsPage } from './form-short-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormShortNewsPageRoutingModule
  ],
  declarations: [FormShortNewsPage]
})
export class FormShortNewsPageModule {}
