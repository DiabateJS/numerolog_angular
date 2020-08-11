import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-matrice-nbre',
  templateUrl: './matrice-nbre.component.html',
  styleUrls: ['./matrice-nbre.component.css']
})
export class MatriceNbreComponent implements OnInit {

  private _nom:string;
  private _prenom:string;
  matrice:number[][];

  constructor() {
    this._nom = "";
    this._prenom = "";
  }

  private getCode(char):number {
    let res:number = 0;
    let dicoNbre:Map<string,number> = new Map<string, number>();
    dicoNbre.set('A',1);
    dicoNbre.set('J',1);
    dicoNbre.set('S',1);

    dicoNbre.set('B',2);
    dicoNbre.set('K',2);
    dicoNbre.set('T',2);

    dicoNbre.set('C',3);
    dicoNbre.set('L',3);
    dicoNbre.set('U',3);

    dicoNbre.set('D',4);
    dicoNbre.set('M',4);
    dicoNbre.set('V',4);

    dicoNbre.set('E',5);
    dicoNbre.set('N',5);
    dicoNbre.set('W',5);

    dicoNbre.set('F',6);
    dicoNbre.set('O',6);
    dicoNbre.set('X',6);

    dicoNbre.set('G',7);
    dicoNbre.set('P',7);
    dicoNbre.set('Y',7);

    dicoNbre.set('H',8);
    dicoNbre.set('Q',8);
    dicoNbre.set('Z',8);

    dicoNbre.set('I',9);
    dicoNbre.set('R',9);

    if (dicoNbre.has(char.toUpperCase())){
        res = dicoNbre.get(char.toUpperCase());
    }
    return res;
  }

  private loadMatrice(){
    let fullName = `${this.nom}${this.prenom}`;
    if (fullName){
        let tabNbre = [0,0,0,0,0,0,0,0,0];

        for (let i = 0 ; i < fullName.length ; i++){
          if (this.getCode(fullName[i]) > 0){
            tabNbre[this.getCode(fullName[i])-1]+= 1;
          }
        }
        //Ligne 1
        this.matrice[0][0] = tabNbre[0];
        this.matrice[0][1] = tabNbre[1];
        this.matrice[0][2] = tabNbre[2];
        //Ligne 2
        this.matrice[1][0] = tabNbre[3];
        this.matrice[1][1] = tabNbre[4];
        this.matrice[1][2] = tabNbre[5];
        //Ligne 3
        this.matrice[2][0] = tabNbre[6];
        this.matrice[2][1] = tabNbre[7];
        this.matrice[2][2] = tabNbre[8];
    }
  }

  get nom():string {
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.loadMatrice();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string ){
    this._prenom = value;
    this.loadMatrice();
  }

  ngOnInit(): void {
    this.matrice = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

  }

}
