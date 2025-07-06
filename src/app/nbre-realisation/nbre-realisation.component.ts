import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreRealisationService} from '../inter-nbre-realisation.service';
import { RequestResult } from '../model/RequestResult';

@Component({
  selector: 'app-nbre-realisation',
  templateUrl: './nbre-realisation.component.html',
  styleUrls: ['./nbre-realisation.component.css']
})
export class NbreRealisationComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreRealisation:number;
  interNbreRealisation:string;

  constructor(private numerologService: NumerologService,
              private interNbreRealisationService: InterNbreRealisationService) {
    this._nom = '';
    this._prenom = '';
    this.nbreRealisation = 0;
    this.interNbreRealisation = '';
  }

  ngOnInit(): void {
  }

  getNbreRealisation(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName !== ''){
      this.nbreRealisation = this.numerologService.getNbreRealisation(fullName);
      this.interNbreRealisationService.getInterNbre(this.nbreRealisation).subscribe((requestResult: RequestResult) => {
        if (!requestResult.error){
            this.interNbreRealisation = requestResult.data.interpretation;
        }
      });
    }
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreRealisation();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreRealisation();
  }

}
