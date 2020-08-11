import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbres-dominants',
  templateUrl: './nbres-dominants.component.html',
  styleUrls: ['./nbres-dominants.component.css']
})
export class NbresDominantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresDominants:number[];
  tabInterNbresDominants:string[];
  intersNbresDominants:string[];
  dicoNbresDominants:Map<number,string>;

  constructor() {
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

  private getCode(char):number {
    let res:number = 0;
    let dicoNbre:Map<string,number> = new Map<string, number>();
    dicoNbre.set('A',1);
    dicoNbre.set('J',1);
    dicoNbre.set('S',1);

    dicoNbre.set('B',2);
    dicoNbre.set('K',2);
    dicoNbre.set('T',2);

    dicoNbre.set('C',3);
    dicoNbre.set('L',3);
    dicoNbre.set('U',3);

    dicoNbre.set('D',4);
    dicoNbre.set('M',4);
    dicoNbre.set('V',4);

    dicoNbre.set('E',5);
    dicoNbre.set('N',5);
    dicoNbre.set('W',5);

    dicoNbre.set('F',6);
    dicoNbre.set('O',6);
    dicoNbre.set('X',6);

    dicoNbre.set('G',7);
    dicoNbre.set('P',7);
    dicoNbre.set('Y',7);

    dicoNbre.set('H',8);
    dicoNbre.set('Q',8);
    dicoNbre.set('Z',8);

    dicoNbre.set('I',9);
    dicoNbre.set('R',9);

    if (dicoNbre.has(char.toUpperCase())){
      res = dicoNbre.get(char.toUpperCase());
    }
    return res;
  }



  getNbresDominants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName){
        let nbre1 = 0 ;
        let nbre2 = 0 ;
        let nbre3 = 0 ;
        let nbre4 = 0 ;
        let nbre5 = 0 ;
        let nbre6 = 0 ;
        let nbre7 = 0 ;
        let nbre8 = 0 ;
        let nbre9 = 0 ;
        for (let i = 0 ; i < fullName.length ; i++){
          let currentCode = fullName[i];
          if (this.getCode(currentCode) == 1)
            nbre1+=1;
          if (this.getCode(currentCode) == 2)
            nbre2+=1;
          if (this.getCode(currentCode) == 3)
            nbre3+=1;
          if (this.getCode(currentCode) == 4)
            nbre4+=1;
          if (this.getCode(currentCode) == 5)
            nbre5+=1;
          if (this.getCode(currentCode) == 6)
            nbre6+=1;
          if (this.getCode(currentCode) == 7)
            nbre7+=1;
          if (this.getCode(currentCode) == 8)
            nbre8+=1;
          if (this.getCode(currentCode) == 9)
            nbre9+=1;
        }
        this.nbresDominants = [];
        let tabOccurences = [nbre1,nbre2,nbre3,nbre4,nbre5,nbre6,nbre7,nbre8,nbre9];
        //Calcul de la moyenne des occurrences
        let moy = 0;
        let som = 0;
        for (let i = 0 ; i < tabOccurences.length ; i++){
          som += tabOccurences[i];
        }
        moy = Math.round(som / tabOccurences.length);
        //Sélection des nombres dominants et interpretation
        let max = 0;
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
