import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbre-actif',
  templateUrl: './nbre-actif.component.html',
  styleUrls: ['./nbre-actif.component.css']
})
export class NbreActifComponent implements OnInit {
  private _prenom:string;
  nbreActif:number;
  interNbreActif:string;
  tabInterNbreActif:string[];

  constructor() {
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

  private reductionNum(nbre:number):number{
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
  }

  getNbreActif(){
    let fullName = `${this._prenom}`;
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
      //Calcul nombre actif
      this.nbreActif = 0;
      for (let i = 0 ; i < this._prenom.length ; i++){
        this.nbreActif += this.getCode(this._prenom[i]);
      }
      this.nbreActif = this.reductionNum(this.nbreActif);
      this.interNbreActif = this.tabInterNbreActif[this.nbreActif-1];
    }
  }

}
