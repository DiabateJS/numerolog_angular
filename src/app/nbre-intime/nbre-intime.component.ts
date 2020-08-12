import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbre-intime',
  templateUrl: './nbre-intime.component.html',
  styleUrls: ['./nbre-intime.component.css'],
  providers: [NumerologService]
})
export class NbreIntimeComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreIntime:number;
  interNbreIntime:string;
  tabInterNbreIntime:string[];

  constructor(private numerologService: NumerologService) {
    this._nom ='';
    this._prenom='';
    this.nbreIntime = 0;
    this.interNbreIntime = '';
    this.tabInterNbreIntime = [];
  }

  ngOnInit(): void {
      this.tabInterNbreIntime = [
        "Motivation : force intérieure qui nous pousse à nous réaliser.",
        "Vous êtes une personne profondément sincère qui désire avant tout être en paix et en harmonie avec ce qui vous entoure",
        "Vous êtes à la fois un être énergique et souple qui sait s'ajuster à toutes les situations.",
        "Travail et recherche de stabilité : C'est dans le travail que vous cherchez à vous réaliser.",
        "Vous êtes quelqu’un qui a horreur de la routine : vous vous intéressez à tout.",
        "Le 6 est constamment tourné vers les autres et ne peut vivre sans l’idéal de servir.",
        "Votre nombre est le 7, le nombre inné de la perfection.",
        "Vous êtes une personne ambitieuse qui veut intensément réussir.",
        "Pour bien vous définir , il faudrait parler d’amour et de compassion, d’humanité : vous ne supportez pas les souffrances de l’humanité."
      ];
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreIntime();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreIntime();
  }

  getNbreIntime(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName !== ''){
      //Calcul nombre intime
      this.nbreIntime = 0;
      for (let i = 0 ; i < fullName.length ; i++){
        if (this.numerologService.isVoyelle(fullName[i])){
          this.nbreIntime += this.numerologService.getCode(fullName[i]);
        }
      }
      this.nbreIntime = this.numerologService.reductionNum(this.nbreIntime);
      this.interNbreIntime = this.tabInterNbreIntime[this.nbreIntime-1];
    }
  }

}
