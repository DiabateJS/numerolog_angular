import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-matrice-nbre',
  templateUrl: './matrice-nbre.component.html',
  styleUrls: ['./matrice-nbre.component.css'],
  providers: [NumerologService]
})
export class MatriceNbreComponent implements OnInit {

  private _nom:string;
  private _prenom:string;
  matrice:number[][];

  constructor(private numerologService: NumerologService) {
    this._nom = "";
    this._prenom = "";
  }

  private loadMatrice(){
    let fullName = `${this.nom}${this.prenom}`;
    if (fullName){
        let tabNbre:number[] = this.numerologService.getTabOccurrences(fullName);
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
