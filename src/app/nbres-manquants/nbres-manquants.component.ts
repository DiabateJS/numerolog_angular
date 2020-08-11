import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbres-manquants',
  templateUrl: './nbres-manquants.component.html',
  styleUrls: ['./nbres-manquants.component.css']
})
export class NbresManquantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresManquants:number[];
  tabInterNbresManquants:string[];
  intersNbresManquants:string[];
  dicoNbresManquants:Map<number,string>;

  constructor() {
      this.nbresManquants = [];
      this.tabInterNbresManquants = [];
      this.intersNbresManquants = [];
      this.dicoNbresManquants = new Map<number,string>();
      this._nom = "";
      this._prenom = "";
  }

  ngOnInit(): void {
      this.tabInterNbresManquants = [
        "il indique une insuffisance d'assurance et de confiance en soi.",
        "il dénote une association difficile.",
        "il indique un certain manque de souplesse et d'adaptation.",
        "il présage de difficultés à organiser et un certain manque de stabilité.",
        "il laisse penser que vous n'aimez pas le changement. Vous êtes sédentaire.",
        "c'est la preuve d'un mariage difficile. Vous avez l'esprit peu conciliant. Vous évitez les obligations.",
        "il indique un certain manque de compréhension. Une nécessité pour vous est de vous ouvrir au niveau de l'esprit.",
        "il dévoile des difficulté à maintenir l'équilibre sur le plan matériel (ou trop, ou trop peu...)",
        "il dénote d'un manque d'intérêt pour les autres."
      ];
  }

  private getInterNbreManquant(nbre:number):string {
    let res:string = '';
    if (this.tabInterNbresManquants){
      res = this.tabInterNbresManquants[nbre-1];
    }
    return res;
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

  private getNbresManquants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName){
      let nbre1 = 0 ;
      let nbre2 = 0 ;
      let nbre3 = 0 ;
      let nbre4 = 0 ;
      let nbre5 = 0 ;
      let nbre6 = 0 ;
      let nbre7 = 0 ;
      let nbre8 = 0 ;
      let nbre9 = 0 ;
      for (let i = 0 ; i < fullName.length ; i++){
        let currentCode = fullName[i];
        if (this.getCode(currentCode) == 1)
          nbre1+=1;
        if (this.getCode(currentCode) == 2)
          nbre2+=1;
        if (this.getCode(currentCode) == 3)
          nbre3+=1;
        if (this.getCode(currentCode) == 4)
          nbre4+=1;
        if (this.getCode(currentCode) == 5)
          nbre5+=1;
        if (this.getCode(currentCode) == 6)
          nbre6+=1;
        if (this.getCode(currentCode) == 7)
          nbre7+=1;
        if (this.getCode(currentCode) == 8)
          nbre8+=1;
        if (this.getCode(currentCode) == 9)
          nbre9+=1;
      }
      this.nbresManquants = [];
      let tabOccurences = [nbre1,nbre2,nbre3,nbre4,nbre5,nbre6,nbre7,nbre8,nbre9];
      //Selection des nombres manquants et interpretation
      for (let i = 0 ; i < tabOccurences.length ; i++){
        if (tabOccurences[i] == 0){
          this.nbresManquants.push(i+1);
        }
      }
      //Interpretation des nombres manquants
      for (let i = 0 ; i < this.nbresManquants.length ; i++){
        this.dicoNbresManquants.set(this.nbresManquants[i],this.getInterNbreManquant(this.nbresManquants[i]));
        this.intersNbresManquants.push(this.getInterNbreManquant(this.nbresManquants[i]));
      }
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
