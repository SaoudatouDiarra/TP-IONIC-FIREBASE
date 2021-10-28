import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotOubliePageRoutingModule } from './mot-oublie-routing.module';

import { MotOubliePage } from './mot-oublie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotOubliePageRoutingModule
  ],
  declarations: [MotOubliePage]
})
export class MotOubliePageModule {}
