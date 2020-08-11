import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbre-intime',
  templateUrl: './nbre-intime.component.html',
  styleUrls: ['./nbre-intime.component.css']
})
export class NbreIntimeComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreIntime:number;
  interNbreIntime:string;
  tabInterNbreIntime:string[];

  constructor() {
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

  private isVoyelle(char:string):boolean {
    let voyelles:string[] = ['A','E','O','U','I','Y'];
    let res:boolean = false;
    if (char.length == 1 && voyelles.indexOf(char.toUpperCase()) != -1){
      res = true;
    }
    return res;
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
      //Calcul nombre intime
      this.nbreIntime = 0;
      for (let i = 0 ; i < fullName.length ; i++){
        if (this.isVoyelle(fullName[i])){
          this.nbreIntime += this.getCode(fullName[i]);
        }
      }
      this.nbreIntime = this.reductionNum(this.nbreIntime);
      this.interNbreIntime = this.tabInterNbreIntime[this.nbreIntime-1];
    }
  }

}
