import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotOubliePage } from './mot-oublie.page';

const routes: Routes = [
  {
    path: '',
    component: MotOubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotOubliePageRoutingModule {}
