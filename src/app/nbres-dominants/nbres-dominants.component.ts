import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterNbreDominantService} from '../inter-nbre-dominant.service';
import { Observable } from 'rxjs';
import { RequestResult } from '../model/RequestResult';

@Component({
  selector: 'app-nbres-dominants',
  templateUrl: './nbres-dominants.component.html',
  styleUrls: ['./nbres-dominants.component.css']
})
export class NbresDominantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresDominants:number[];
  dicoNbresDominants:Map<number,string>;

  constructor(private numerologService: NumerologService,
              private interNbreDominantService: InterNbreDominantService) {
    this.nbresDominants = [];
    this.dicoNbresDominants = new Map<number,string>();
  }

  ngOnInit(): void {
  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbresDominants();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbresDominants();
  }

  getNbresDominants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (this._nom !== '' && this._prenom !== ''){
        this.nbresDominants = this.numerologService.getNbresDominants(fullName);
        //Interpretation nombres dominants
        //this.dicoNbresDominants = this.interNbreDominantService.getIntersNbres(this.nbresDominants);
        this.nbresDominants.forEach(nbre => {
            this.interNbreDominantService.getInterNbre(nbre).subscribe((requestResult: RequestResult) => {
                if (!requestResult.error){
                    this.dicoNbresDominants.set(nbre, requestResult.data.interpretation);
                }
            });
        });
    }
  }

}
