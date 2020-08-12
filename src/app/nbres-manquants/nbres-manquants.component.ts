import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreManquantService} from '../inter-nbre-manquant.service';

@Component({
  selector: 'app-nbres-manquants',
  templateUrl: './nbres-manquants.component.html',
  styleUrls: ['./nbres-manquants.component.css']
})
export class NbresManquantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresManquants:number[];
  dicoNbresManquants:Map<number,string>;

  constructor(private numerologService: NumerologService,
              private interNbreManquantService: InterNbreManquantService) {
      this.nbresManquants = [];
      this.dicoNbresManquants = new Map<number,string>();
      this._nom = "";
      this._prenom = "";
  }

  ngOnInit(): void {
  }

  private getNbresManquants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName !== ''){
      this.nbresManquants = this.numerologService.getNbresManquants(fullName);
      //Interpretation des nombres manquants
      this.dicoNbresManquants = this.interNbreManquantService.getIntersNbres(this.nbresManquants);
    }
  }

  get nom():string{
      return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbresManquants();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbresManquants();
  }

}
