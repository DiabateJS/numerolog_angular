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
    CheminVieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
