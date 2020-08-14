import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerologService {
  private _dicoNbres:Map<string,number>;

  constructor() {
    this._dicoNbres = new Map<string,number>();
    this._dicoNbres.set('A',1);
    this._dicoNbres.set('J',1);
    this._dicoNbres.set('S',1);

    this._dicoNbres.set('B',2);
    this._dicoNbres.set('K',2);
    this._dicoNbres.set('T',2);

    this._dicoNbres.set('C',3);
    this._dicoNbres.set('L',3);
    this._dicoNbres.set('U',3);

    this._dicoNbres.set('D',4);
    this._dicoNbres.set('M',4);
    this._dicoNbres.set('V',4);

    this._dicoNbres.set('E',5);
    this._dicoNbres.set('N',5);
    this._dicoNbres.set('W',5);

    this._dicoNbres.set('F',6);
    this._dicoNbres.set('O',6);
    this._dicoNbres.set('X',6);

    this._dicoNbres.set('G',7);
    this._dicoNbres.set('P',7);
    this._dicoNbres.set('Y',7);

    this._dicoNbres.set('H',8);
    this._dicoNbres.set('Q',8);
    this._dicoNbres.set('Z',8);

    this._dicoNbres.set('I',9);
    this._dicoNbres.set('R',9);

    this._dicoNbres.set('1',1);
    this._dicoNbres.set('2',2);
    this._dicoNbres.set('3',3);

    this._dicoNbres.set('4',4);
    this._dicoNbres.set('5',5);
    this._dicoNbres.set('6',6);

    this._dicoNbres.set('7',7);
    this._dicoNbres.set('8',8);
    this._dicoNbres.set('9',9);
  }

  getCode(char:string):number{
    let res:number= 0;
    if (this._dicoNbres.has(char.toUpperCase())){
        res = this._dicoNbres.get(char.toUpperCase());
    }
    return res;
  }

  getTabOccurrences(fullname:string):number[]{
      const tab: number[] = [0,0,0,0,0,0,0,0,0];
      if (fullname !== ''){
        for (let i = 0 ; i < fullname.length ; i++){
          if (this.getCode(fullname[i]) > 0){
            tab[this.getCode(fullname[i])-1]+= 1;
          }
        }
      }
      return tab;
  }

  getNbresDominants(fullname:string):number[]{
    let nbresDominants:number[] = [];
    let tabOccurences:number[] = this.getTabOccurrences(fullname);
    //Calcul de la moyenne des occurrences
    let moy = 0;
    let som = 0;
    for (let i = 0 ; i < tabOccurences.length ; i++){
      som += tabOccurences[i];
    }
    moy = Math.round(som / tabOccurences.length);
    //Sélection des nombres dominants et interpretation
    //let max = 0;
    for (let i = 0 ; i < tabOccurences.length ; i++){
      if (tabOccurences[i] > moy){
        nbresDominants.push(i+1);
      }
    }
    return nbresDominants;
  }

  getNbresManquants(fullname:string):number[]{
    let nbresManquants:number[] = [];
    let tabOccurences = this.getTabOccurrences(fullname);
    //Selection des nombres manquants et interpretation
    for (let i = 0 ; i < tabOccurences.length ; i++){
      if (tabOccurences[i] === 0){
        nbresManquants.push(i+1);
      }
    }
    return nbresManquants;
  }

  reductionNum(nbre:number):number {
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
  }

  reductionChaine(chaine:string):number{
    let somme:number = 0;
    for (let i = 0 ; i < chaine.length ; i++){
      somme += this.getCode(chaine[i]);
    }
    somme = this.reductionNum(somme);
    return somme;
  }

  isVoyelle(char:string):boolean {
    let voyelles:string[] = ['A','E','O','U','I','Y'];
    let res:boolean = false;
    if (char.length == 1 && voyelles.indexOf(char.toUpperCase()) != -1){
      res = true;
    }
    return res;
  }

  isConsonne(char:string):boolean {
    let consonnes:string[] = ['J','S','B','K','T','C','L','D','M','V','N','W','F','X','G','P','H','Q','Z','R'];
    let res:boolean = false;
    if (char.length == 1 && consonnes.indexOf(char.toUpperCase()) != -1){
      res = true;
    }
    return res;
  }

  getNbreActif(prenom:string):number{
    let nbreActif:number = 0;
    for (let i = 0 ; i < prenom.length ; i++){
      nbreActif += this.getCode(prenom[i]);
    }
    nbreActif = this.reductionNum(nbreActif);
    return nbreActif;
  }

  getNbreExpression(fullname:string):number{
    let nbreExpression:number = 0;
    for (let i = 0 ; i < fullname.length ; i++){
      nbreExpression += this.getCode(fullname[i]);
    }
    nbreExpression = this.reductionNum(nbreExpression);
    return nbreExpression;
  }

  getNbreHereditaire(nom:string):number {
    let nbreHereditaire:number = 0;
    for (let i = 0 ; i < nom.length ; i++){
      nbreHereditaire += this.getCode(nom[i]);
    }
    nbreHereditaire = this.reductionNum(nbreHereditaire);
    return nbreHereditaire;
  }

  getNbreIntime(fullname:string):number {
    let nbreIntime:number = 0;
    for (let i = 0 ; i < fullname.length ; i++){
      if (this.isVoyelle(fullname[i])){
        nbreIntime += this.getCode(fullname[i]);
      }
    }
    nbreIntime = this.reductionNum(nbreIntime);
    return nbreIntime;
  }

  getNbreRealisation(fullname:string):number {
    let nbreRealisation:number = 0;
    for (let i = 0 ; i < fullname.length ; i++){
      if (this.isConsonne(fullname[i])){
        nbreRealisation += this.getCode(fullname[i]);
      }
    }
    nbreRealisation = this.reductionNum(nbreRealisation);
    return nbreRealisation;
  }

  getCheminVie(dateNaissance:string):number {
    let cheminVie:number = 0;
    let tabDateNais:string[] = dateNaissance ? dateNaissance.split("-") : [];
    if (tabDateNais.length === 3){
      cheminVie += parseInt(tabDateNais[0]) + parseInt(tabDateNais[1]) + parseInt(tabDateNais[2]);
      cheminVie = this.reductionNum(cheminVie);
    }
    return cheminVie;
  }


}
