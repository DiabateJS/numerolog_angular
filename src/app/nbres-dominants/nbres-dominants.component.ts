import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbres-dominants',
  templateUrl: './nbres-dominants.component.html',
  styleUrls: ['./nbres-dominants.component.css'],
  providers: [NumerologService]
})
export class NbresDominantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresDominants:number[];
  tabInterNbresDominants:string[];
  intersNbresDominants:string[];
  dicoNbresDominants:Map<number,string>;

  constructor(private numerologService: NumerologService) {
    this.nbresDominants = [];
    this.tabInterNbresDominants = [];
    this.intersNbresDominants = [];
    this.dicoNbresDominants = new Map<number,string>();
  }

  ngOnInit(): void {
    this.tabInterNbresDominants = [
      "il caractérise l'autorité et la volonté.",
      "il indique une esprit de coopération et la recherche de l'union.",
      "il montre votre aisance en société et votre sens des relations.",
      "il atteste de vos qualités d'ordre et de persévérance dans le travail.",
      "c'est l'indication du mouvement et des voyages. Vous faites preuve d'un esprit large.",
      "il indique la recherche de l'harmonie et de l'accord. Vous avez le sens de la famille. C'est le signe de l'amour et de l'amitié.",
      "il révèle des qualités d'invention et de recherche. Parfois, il montre un engagement dans un idéal.",
      "il révèle la recherche de la réussite à tous niveaux. Il signale une certaine chance matérielle.",
      "c'est le signe de la qualité de dévouement et d'altruisme."
    ];
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbresDominants();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbresDominants();
  }

  private getInterNbreDominant(nbre:number):string {
    let res:string = '';
    if (this.tabInterNbresDominants){
      res = this.tabInterNbresDominants[nbre-1];
    }
    return res;
  }

  getNbresDominants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (this._nom !== '' && this._prenom !== ''){
        this.nbresDominants = [];
        let tabOccurences = this.numerologService.getTabOccurrences(fullName);
        //Calcul de la moyenne des occurrences
        let moy = 0;
        let som = 0;
        for (let i = 0 ; i < tabOccurences.length ; i++){
          som += tabOccurences[i];
        }
        moy = Math.round(som / tabOccurences.length);
        //Sélection des nombres dominants et interpretation
        //let max = 0;
        for (let i = 0 ; i < tabOccurences.length ; i++){
          if (tabOccurences[i] > moy){
            this.nbresDominants.push(i+1);
          }
        }
        //Interpretation nombres dominants
        for (let i = 0 ; i < this.nbresDominants.length ; i++){
          this.dicoNbresDominants.set(this.nbresDominants[i],this.getInterNbreDominant(this.nbresDominants[i]));
          this.intersNbresDominants.push(this.getInterNbreDominant(this.nbresDominants[i]));
        }
    }
  }

}
