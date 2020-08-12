import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbre-expression',
  templateUrl: './nbre-expression.component.html',
  styleUrls: ['./nbre-expression.component.css'],
  providers: [NumerologService]
})
export class NbreExpressionComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreExpression:number;
  interNbreExpression:string;
  tabInterNbreExpression:string[];

  constructor(private numerologService: NumerologService) {
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

  getNbreExpression(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName){
      this.nbreExpression = 0;
      for (let i = 0 ; i < fullName.length ; i++){
        this.nbreExpression += this.numerologService.getCode(fullName[i]);
      }
      this.nbreExpression = this.numerologService.reductionNum(this.nbreExpression);
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
