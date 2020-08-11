import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbre-hereditaire',
  templateUrl: './nbre-hereditaire.component.html',
  styleUrls: ['./nbre-hereditaire.component.css']
})
export class NbreHereditaireComponent implements OnInit {
  private _nom:string;
  nbreHereditaire:number;
  interNbreHereditaire:string;
  tabInterNbreHereditaire:string[];

  constructor() {
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

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreHereditaire();
  }

  private reductionNum(nbre:number):number{
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
  }

  private getNbreHereditaire(){
      let fullName = `${this.nom}`;
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

      //Calcul nombre héréditaire
      this.nbreHereditaire = 0;
      for (let i = 0 ; i < this._nom.length ; i++){
        this.nbreHereditaire += this.getCode(this._nom[i]);
      }
      this.nbreHereditaire = this.reductionNum(this.nbreHereditaire);
      this.interNbreHereditaire = this.tabInterNbreHereditaire[this.nbreHereditaire-1];
  }

}
