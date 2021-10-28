import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitPageRoutingModule } from './reinit-routing.module';

import { ReinitPage } from './reinit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitPageRoutingModule
  ],
  declarations: [ReinitPage]
})
export class ReinitPageModule {}
