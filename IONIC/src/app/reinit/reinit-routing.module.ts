import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitPage } from './reinit.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitPageRoutingModule {}
