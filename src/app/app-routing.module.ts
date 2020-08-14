import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeNumerologiqueComponent} from './theme-numerologique/theme-numerologique.component';
import {NumCoupleComponent} from './num-couple/num-couple.component';
import {NumEntrepriseComponent} from './num-entreprise/num-entreprise.component';
import {NumHabitationComponent} from './num-habitation/num-habitation.component';
import {NumVehiculeComponent} from './num-vehicule/num-vehicule.component';


const routes: Routes = [
  {
    path: '',
    component: ThemeNumerologiqueComponent
  },
  {
    path: 'personnel',
    component: ThemeNumerologiqueComponent
  },
  {
    path: 'couple',
    component: NumCoupleComponent
  },
  {
    path: 'entreprise',
    component: NumEntrepriseComponent
  },
  {
    path: 'habitation',
    component: NumHabitationComponent
  },
  {
    path: 'vehicule',
    component: NumVehiculeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
