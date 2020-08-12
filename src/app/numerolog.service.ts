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

  reductionNum(nbre:number):number {
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
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


}
