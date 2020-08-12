import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreHereditaireService} from '../inter-nbre-hereditaire.service';

@Component({
  selector: 'app-nbre-hereditaire',
  templateUrl: './nbre-hereditaire.component.html',
  styleUrls: ['./nbre-hereditaire.component.css']
})
export class NbreHereditaireComponent implements OnInit {
  private _nom:string;
  nbreHereditaire:number;
  interNbreHereditaire:string;

  constructor(private numerologService: NumerologService,
              private interNbreHereditaireService: InterNbreHereditaireService) {
    this._nom = '';
    this.nbreHereditaire = 0;
    this.interNbreHereditaire = '';
  }

  ngOnInit(): void {
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreHereditaire();
  }

  private getNbreHereditaire(){
      let fullName = `${this._nom}`;
      if (fullName !== ''){
        //Calcul nombre héréditaire
        this.nbreHereditaire = this.numerologService.getNbreHereditaire(fullName);
        this.interNbreHereditaire = this.interNbreHereditaireService.getInterNbre(this.nbreHereditaire);
      }
  }

}
