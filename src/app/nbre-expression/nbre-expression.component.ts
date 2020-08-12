import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreExpressionService} from '../inter-nbre-expression.service';

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

  constructor(private numerologService: NumerologService,
              private interNbreExpressionService: InterNbreExpressionService) {
    this._nom = '';
    this._prenom = '';
    this.nbreExpression = 0;
    this.interNbreExpression = '';
  }

  ngOnInit(): void {
  }

  getNbreExpression(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName){
      this.nbreExpression = this.numerologService.getNbreExpression(fullName);
      this.interNbreExpression = this.interNbreExpressionService.getInterNbre(this.nbreExpression);
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
