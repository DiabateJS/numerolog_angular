import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {elementEventFullName} from '@angular/compiler/src/view_compiler/view_compiler';
import {PrenomService} from '../prenom.service';

@Component({
  selector: 'app-conseils-numerolog',
  templateUrl: './conseils-numerolog.component.html',
  styleUrls: ['./conseils-numerolog.component.css']
})
export class ConseilsNumerologComponent implements OnInit {
  nomPere:string;
  nbreHereditairePere:number;
  prenomsTrouves:string[];
  sexeEnfant:string;

  nbreActifEnfant:string;
  nbreIntimeEnfant:string;
  nbreRealisationEnfant:string;
  nbreExpressionEnfant:string;

  prenomsFiles:string[];
  prenomsGarcon:string[];

  constructor(private numerologService: NumerologService,
              private prenomService: PrenomService) {
    this.nomPere = '';
    this.nbreHereditairePere = 0;
    this.prenomsTrouves = [];
    this.sexeEnfant = '';
    this.nbreActifEnfant = '0';
    this.nbreIntimeEnfant = '0';
    this.nbreRealisationEnfant = '0';
    this.nbreExpressionEnfant = '0';
    this.prenomsFiles = [];
    this.prenomsGarcon = [];
  }

  private isPrenomOk(prenom: string): boolean {
    let resultat: boolean = false;
    const nbreActifAttendu: number = parseInt(this.nbreActifEnfant);
    const nbreIntimeAttendu: number = parseInt(this.nbreIntimeEnfant);
    const nbreRealisationAttendu:number = parseInt(this.nbreRealisationEnfant);
    const nbreExpressionAttendu:number = parseInt(this.nbreExpressionEnfant);
    let nbreActifEnCours:number = 0;
    let nomCompletEnCours:string = '';
    let nbreIntimeEnCours:number = 0;
    let nbreRealisationEnCours:number = 0;
    let nbreExpressionEnCours:number = 0;
    let isActifConditionOk:boolean = false;
    let isIntimeConditionOk:boolean = false;
    let isRealisationConditionOk:boolean = false;
    let isExpressionConditionOk:boolean = false;

    nomCompletEnCours = `${this.nomPere} ${prenom}`;
    nbreActifEnCours = this.numerologService.getNbreActif(prenom);
    nbreIntimeEnCours = this.numerologService.getNbreIntime(nomCompletEnCours);
    nbreRealisationEnCours = this.numerologService.getNbreRealisation(nomCompletEnCours);
    nbreExpressionEnCours = this.numerologService.getNbreExpression(nomCompletEnCours);
    isActifConditionOk = nbreActifEnCours === nbreActifAttendu;
    isIntimeConditionOk = nbreIntimeEnCours === nbreIntimeAttendu;
    isRealisationConditionOk = nbreRealisationEnCours === nbreRealisationAttendu;
    isExpressionConditionOk = nbreExpressionEnCours === nbreExpressionAttendu;
    resultat = isIntimeConditionOk && isRealisationConditionOk && isActifConditionOk && isExpressionConditionOk;
    return resultat;
  }

  doCalcul(){
    if (this.nomPere !== ''){
        this.prenomsTrouves = [];
        this.sexeEnfant = this.sexeEnfant === '' ? 'garçon' : this.sexeEnfant;
        this.nbreHereditairePere = this.numerologService.reductionChaine(this.nomPere);
        const prenoms = this.sexeEnfant === 'garçon' ? this.prenomService.getPrenomsGarcons() :
                                                      this.prenomService.getPrenomsFiles();
        this.prenomsTrouves = prenoms.filter(prenom => this.isPrenomOk(prenom));
    }
  }

  ngOnInit(): void {
    this.prenomsFiles = this.prenomService.getPrenomsFiles();
    this.prenomsGarcon = this.prenomService.getPrenomsGarcons();
  }

}
