import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbre-actif',
  templateUrl: './nbre-actif.component.html',
  styleUrls: ['./nbre-actif.component.css'],
  providers: [NumerologService]
})
export class NbreActifComponent implements OnInit {
  private _prenom:string;
  nbreActif:number;
  interNbreActif:string;
  tabInterNbreActif:string[];

  constructor(private numerologService: NumerologService) {
    this._prenom = '';
    this.nbreActif = 0;
    this.interNbreActif = '';
    this.tabInterNbreActif = [];
  }

  ngOnInit(): void {
    this.tabInterNbreActif = [
      "Votre nombre actif est le 1, c’est le nombre le plus fort, mais certainement le plus difficile à porter. ",
      "Vous êtes à la recherche d’un équilibre de vie, de l’harmonie avec votre entourage.",
      "Original et intelligent, vous saurez habilement trouver votre talent que ce soit en art graphique ,plastique ou dramatique.",
      "Vous êtes des personnes équilibrées, structurées, et vous aimez bien savoir où vous vous en allez avant d'agir.",
      "Que l’on vous propose de lancer de nouveaux produits, de faire des voyages ou de modifier votre environnement, vous faites preuve d'un enthousiasme débordant.",
      "Le bonheur est votre seule et unique préoccupation, alors vous recherchez surtout une certaine harmonie familiale.",
      "Douées d'une intelligence forte, supérieure à la moyenne, vous aimez faire le tour de la question avant de vous engager dans une voie précise.",
      "Vous ne sauriez accepter que quelqu'un ne soit pas reconnu pour sa valeur ou ses performances.",
      "Vous êtes doué d’une sensibilité intense qui influence non seulement vos réalisations, mais également votre comportement."
    ];
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreActif();
  }

  getNbreActif(){
    let fullName = `${this._prenom}`;
    if (fullName){
      //Calcul nombre actif
      this.nbreActif = 0;
      for (let i = 0 ; i < this._prenom.length ; i++){
        this.nbreActif += this.numerologService.getCode(this._prenom[i]);
      }
      this.nbreActif = this.numerologService.reductionNum(this.nbreActif);
      this.interNbreActif = this.tabInterNbreActif[this.nbreActif-1];
    }
  }

}
