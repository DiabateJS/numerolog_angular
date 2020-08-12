import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-nbres-manquants',
  templateUrl: './nbres-manquants.component.html',
  styleUrls: ['./nbres-manquants.component.css'],
  providers: [NumerologService]
})
export class NbresManquantsComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbresManquants:number[];
  tabInterNbresManquants:string[];
  intersNbresManquants:string[];
  dicoNbresManquants:Map<number,string>;

  constructor(private numerologService: NumerologService) {
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

  private getNbresManquants(){
    let fullName = `${this._nom}${this._prenom}`;
    if (fullName !== ''){
      this.nbresManquants = [];
      let tabOccurences = this.numerologService.getTabOccurrences(fullName);
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
