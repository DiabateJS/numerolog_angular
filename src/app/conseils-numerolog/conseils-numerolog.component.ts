import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {elementEventFullName} from '@angular/compiler/src/view_compiler/view_compiler';

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

  constructor(private numerologService: NumerologService) {
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

  doCalcul(){
    if (this.nomPere !== ''){
        this.prenomsTrouves = [];
        this.sexeEnfant = this.sexeEnfant === '' ? 'garçon' : this.sexeEnfant;
        this.nbreHereditairePere = this.numerologService.reductionChaine(this.nomPere);
        const nbreActifAttendu:number = parseInt(this.nbreActifEnfant);
        const nbreIntimeAttendu:number = parseInt(this.nbreIntimeEnfant);
        const nbreRealisationAttendu:number = parseInt(this.nbreRealisationEnfant);
        const nbreExpressionAttendu:number = parseInt(this.nbreExpressionEnfant);
        let nbreActifEnCours:number = 0;
        let nomCompletEnCours:string = '';
        let nbreIntimeEnCours:number = 0;
        let nbreRealisationEnCours:number = 0;
        let nbreExpressionEnCours:number = 0;
        let prenoms:string[] = this.sexeEnfant === 'garçon' ? this.prenomsGarcon : this.prenomsFiles;
        let isActifConditionOk:boolean = false;
        let isIntimeConditionOk:boolean = false;
        let isRealisationConditionOk:boolean = false;
        let isExpressionConditionOk:boolean = false;
        for (const prenom of prenoms){
            nomCompletEnCours = `${this.nomPere} ${prenom}`;
            nbreActifEnCours = this.numerologService.getNbreActif(prenom);
            nbreIntimeEnCours = this.numerologService.getNbreIntime(nomCompletEnCours);
            nbreRealisationEnCours = this.numerologService.getNbreRealisation(nomCompletEnCours);
            nbreExpressionEnCours = this.numerologService.getNbreExpression(nomCompletEnCours);
            if (nbreActifEnCours === nbreActifAttendu){
                isActifConditionOk = true;
            }
            if (nbreIntimeEnCours === nbreIntimeEnCours){
                isIntimeConditionOk = true;
            }
            if (nbreRealisationEnCours === nbreRealisationAttendu){
                isRealisationConditionOk = true;
            }
            if (nbreExpressionEnCours === nbreExpressionAttendu){
                isExpressionConditionOk = true;
            }
            if (isIntimeConditionOk && isRealisationConditionOk && isActifConditionOk && isExpressionConditionOk){
              this.prenomsTrouves.push(prenom);
            }
        }
    }
  }

  ngOnInit(): void {
    this.prenomsFiles = [
      'Emma',
      'Maëlle',
      'Colette',
      'Bénédicte',
      'Mathilde',
      'Justine',
      'Adelice',
      'Elane',
      'Chloé',
      'Léa',
      'Louise',
      'Manon',
      'Rose',
      'Sarah',
      'Juliette',
      'Zoé',
      'Camille',
      'Lucie',
      'Ganaëlle',
      'Hermeline',
      'Haline',
      'Solange',
      'Nelly',
      'Heliette',
      'Cora',
      'Gladie',
      'Gisemonde',
      'Janig',
      'Marjolaine',
      'Iris',
      'Jesabelle',
      'Hermande',
      'Ermance',
      'Evelise',
      'Catherine',
      'Marianne',
      'Clémence',
      'Emeline',
      'Laetitia',
      'Cécile',
      'Isabelle',
      'Océane',
      'Elisabeth',
      'Madeline',
      'Marguerite',
      'Faustine',
      'Delphine',
      'Maïté',
      'Stéphanie',
      'Élyane',
      'Alline',
      'Cunégonde',
      'Arlinda',
      'Gratiane',
      'Lauraline',
      'Aubérie',
      'Titiane',
      'Lauréane',
      'Iolanda',
      'Anathalie',
      'Cyriane',
      'Gasparine',
      'Elidie',
      'Ivelyne',
      'Melissane',
      'Fleuriane',
      'Alexianne',
      'Célanie',
      'Danaelle',
      'Gloire',
      'Andréline',
      'Fauve',
      'Berthilde',
      'Florette',
      'Guilene',
      'Gueven',
      'Gwennola',
      'Guyveline',
      'Cyliane',
      'Elody',
      'Béthanie',
      'Gracienne',
      'Alis',
      'Clorinthe',
      'Laurélie',
      'Elléa',
      'Maïka',
      'Gilliane',
      'Luana',
      'Joia',
      'Idalie',
      'Illana',
      'Madelyne',
      'Darie',
      'Souane',
      'Gwendael'
    ];

    this.prenomsGarcon = [
      'Benjamin',
      'Marceau',
      'Sacha',
      'Gabin',
      'Paul',
      'Maël',
      'Arthur',
      'Nathan',
      'Théo',
      'Gaudens',
      'Patrice',
      'Sébastien',
      'Thadée',
      'Régis',
      'Léopold',
      'Nathanaël',
      'Romuald',
      'Maxence',
      'Jeffry',
      'Guerlain',
      'Joël',
      'Gabriel',
      'Hermant',
      'Adam',
      'Jules',
      'Raphaël',
      'Lucas',
      'Hugo',
      'Gustave',
      'Hadrien',
      'Martin',
      'Donatien',
      'Charles',
      'Eric',
      'Philippe',
      'Renaud',
      'Christian',
      'Brice',
      'Henri',
      'Léonard',
      'Hermand',
      'Alexandre',
      'Noël',
      'Yves',
      'Vincent',
      'Noé',
      'Victor',
      'Pascal',
      'Aliaume',
      'Philiber',
      'Baudry',
      'Gualbert',
      'Gratian',
      'Tonin',
      'Jocelin',
      'Nicolas',
      'Erevan',
      'Hadrian',
      'Geordie',
      'Téophile',
      'Gontrand',
      'Alexan',
      'Gwenegan',
      'Laurens',
      'Guilhaume',
      'Richard',
      'Maximillien',
      'Guilain',
      'Ive',
      'Gerson',
      'Godefroi',
      'Melchior',
      'Giraud',
      'Joric',
      'Joachin',
      'Elphège',
      'Ange',
      'Emile',
      'Mathias',
      'Solal',
      'Grégoire',
      'Paris',
      'Ludovic',
      'Joseph',
      'Justin',
      'Michaël',
      'Luc',
      'Jérémie',
      'Justinien',
      'Ivan',
      'Silvère',
      'Philémon',
      'Edmont',
      'Cyriac',
      'Corantin',
      'Philbert'
    ];
  }

}
