import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporaryComponent } from './temporary.component';

const routes: Routes = [{ path: ':title', component: TemporaryComponent },
{ path: '**', component: TemporaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemporaryRoutingModule { }
