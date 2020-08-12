import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreActifService} from '../inter-nbre-actif.service';

@Component({
  selector: 'app-nbre-actif',
  templateUrl: './nbre-actif.component.html',
  styleUrls: ['./nbre-actif.component.css']
})
export class NbreActifComponent implements OnInit {
  private _prenom:string;
  nbreActif:number;
  interNbreActif:string;

  constructor(private numerologService: NumerologService,
              private interNbreActifService: InterNbreActifService) {
    this._prenom = '';
    this.nbreActif = 0;
    this.interNbreActif = '';
  }

  ngOnInit(): void {
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreActif();
  }

  getNbreActif(){
    let fullName = `${this._prenom}`;
    if (fullName){
      //Calcul nombre actif
      this.nbreActif = this.numerologService.getNbreActif(fullName);
      this.interNbreActif = this.interNbreActifService.getInterNbre(this.nbreActif);
    }
  }

}
