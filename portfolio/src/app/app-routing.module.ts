import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoplurComponent } from './doplur/doplur.component';
import { InnocuousComponent } from './innocuous/innocuous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TtcComponent } from './ttc/ttc.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'doplur',
    component: DoplurComponent
  },
  {
    path: 'innocuous',
    component: InnocuousComponent
  },
  {
    path: 'ttc',
    component: TtcComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
