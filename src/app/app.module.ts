import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeNumerologiqueComponent } from './theme-numerologique/theme-numerologique.component';
import {FormsModule} from '@angular/forms';
import { MatriceNbreComponent } from './matrice-nbre/matrice-nbre.component';
import { NbresDominantsComponent } from './nbres-dominants/nbres-dominants.component';
import { NbresManquantsComponent } from './nbres-manquants/nbres-manquants.component';
import { NbreHereditaireComponent } from './nbre-hereditaire/nbre-hereditaire.component';
import { NbreActifComponent } from './nbre-actif/nbre-actif.component';
import { NbreIntimeComponent } from './nbre-intime/nbre-intime.component';
import { NbreRealisationComponent } from './nbre-realisation/nbre-realisation.component';
import { NbreExpressionComponent } from './nbre-expression/nbre-expression.component';
import { CheminVieComponent } from './chemin-vie/chemin-vie.component';
import {NumerologService} from './numerolog.service';
import {InterNbreManquantService} from './inter-nbre-manquant.service';
import {InterNbreDominantService} from './inter-nbre-dominant.service';
import {InterNbreActifService} from './inter-nbre-actif.service';
import {InterNbreExpressionService} from './inter-nbre-expression.service';
import {InterNbreHereditaireService} from './inter-nbre-hereditaire.service';
import {InterNbreIntimeService} from './inter-nbre-intime.service';
import {InterNbreRealisationService} from './inter-nbre-realisation.service';
import { AppRoutingModule } from './app-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NumCoupleComponent } from './num-couple/num-couple.component';
import { NumEntrepriseComponent } from './num-entreprise/num-entreprise.component';
import { NumHabitationComponent } from './num-habitation/num-habitation.component';
import { NumVehiculeComponent } from './num-vehicule/num-vehicule.component';
import { ConseilsNumerologComponent } from './conseils-numerolog/conseils-numerolog.component';
import {PrenomService} from './prenom.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeNumerologiqueComponent,
    MatriceNbreComponent,
    NbresDominantsComponent,
    NbresManquantsComponent,
    NbreHereditaireComponent,
    NbreActifComponent,
    NbreIntimeComponent,
    NbreRealisationComponent,
    NbreExpressionComponent,
    CheminVieComponent,
    MenuBarComponent,
    NumCoupleComponent,
    NumEntrepriseComponent,
    NumHabitationComponent,
    NumVehiculeComponent,
    ConseilsNumerologComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NumerologService,
    InterNbreManquantService,
    InterNbreDominantService,
    InterNbreActifService,
    InterNbreExpressionService,
    InterNbreHereditaireService,
    InterNbreIntimeService,
    InterNbreRealisationService,
    PrenomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
