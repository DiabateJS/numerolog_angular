import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbre-expression',
  templateUrl: './nbre-expression.component.html',
  styleUrls: ['./nbre-expression.component.css']
})
export class NbreExpressionComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreExpression:number;
  interNbreExpression:string;
  tabInterNbreExpression:string[];

  constructor() {
    this._nom = '';
    this._prenom = '';
    this.nbreExpression = 0;
    this.interNbreExpression = '';
    this.tabInterNbreExpression = [];
  }

  ngOnInit(): void {
    this.tabInterNbreExpression = [
      "Peu importe leur spécialité ,les personnes de type 1 recherchent des postes de commande.",
      "Vous avez besoin d’une tendance harmonieuse sans querelle ni dispute.Vous êtes émotif (ve).",
      "Vous êtes sociable, enthousiaste et optimiste.",
      "Vous êtes entêté(e) et capable de tout pour obtenir ce que vous désirez.",
      "Vous êtes souvent prêt(e) à tout remettre en question mais vos qualités d’adaptation vous permettent de vous sortir de toutes les situations.",
      "Vous avez le sens de la beauté et êtes amoureux(se) de belles choses.",
      "Votre Hypersensibilité vous pousse à être instable dans votre comportement.",
      "Vous pouvez être dur(e) et agressif(ve) envers les personnes qui ne vous intéressent pas.",
      "Vous êtes cependant réservé(e) et indépendant(e)."
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

  getNbreExpression(){
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
      this.nbreExpression = 0;
      for (let i = 0 ; i < fullName.length ; i++){
        this.nbreExpression += this.getCode(fullName[i]);
      }
      this.nbreExpression = this.reductionNum(this.nbreExpression);
      this.interNbreExpression = this.tabInterNbreExpression[this.nbreExpression-1];
    }
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreExpression();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreExpression();
  }


}
