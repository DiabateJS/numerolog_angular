import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbre-hereditaire',
  templateUrl: './nbre-hereditaire.component.html',
  styleUrls: ['./nbre-hereditaire.component.css'],
  providers: [NumerologService]
})
export class NbreHereditaireComponent implements OnInit {
  private _nom:string;
  nbreHereditaire:number;
  interNbreHereditaire:string;
  tabInterNbreHereditaire:string[];

  constructor(private numerologService: NumerologService) {
    this._nom = '';
    this.nbreHereditaire = 0;
    this.tabInterNbreHereditaire = [];
    this.interNbreHereditaire = '';
  }

  ngOnInit(): void {
      this.tabInterNbreHereditaire = [
        "Courage, assurance, audace, aplomb.",
        "Équilibre, Sociabilité, Bon sens, Amabilité.",
        "Créativité, Adaptabilité, Inventivité, Expression.",
        "Méthode, Ordre, Minutie, Rigueur et Ténacité.",
        "Combativité, Ardeur, Résistance.",
        "Justice, Générosité, Honnêteté.",
        "Raison, Sagesse, Bon sens, Modération.",
        "Autorité, Détermination, Influence.",
        "Dignité, Fierté, Amour-propre."
      ];
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreHereditaire();
  }

  private getNbreHereditaire(){
      let fullName = `${this._nom}`;
      if (fullName !== ''){
        //Calcul nombre héréditaire
        this.nbreHereditaire = 0;
        for (let i = 0 ; i < this._nom.length ; i++){
          this.nbreHereditaire += this.numerologService.getCode(this._nom[i]);
        }
        this.nbreHereditaire = this.numerologService.reductionNum(this.nbreHereditaire);
        this.interNbreHereditaire = this.tabInterNbreHereditaire[this.nbreHereditaire-1];
      }
  }

}
