import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreIntimeService} from '../inter-nbre-intime.service';

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

  constructor(private numerologService: NumerologService,
              private interNbreIntimeService: InterNbreIntimeService) {
    this._nom ='';
    this._prenom='';
    this.nbreIntime = 0;
    this.interNbreIntime = '';
  }

  ngOnInit(): void {
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
      this.nbreIntime = this.numerologService.getNbreIntime(fullName);
      this.interNbreIntime = this.interNbreIntimeService.getInterNbre(this.nbreIntime);
    }
  }

}
