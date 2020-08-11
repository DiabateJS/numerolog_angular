import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nbre-realisation',
  templateUrl: './nbre-realisation.component.html',
  styleUrls: ['./nbre-realisation.component.css']
})
export class NbreRealisationComponent implements OnInit {
  private _nom:string;
  private _prenom:string;
  nbreRealisation:number;
  interNbreRealisation:string;
  tabInterNbreRealisation:string[];

  constructor() {
    this._nom = '';
    this._prenom = '';
    this.nbreRealisation = 0;
    this.interNbreRealisation = '';
    this.tabInterNbreRealisation = [];
  }

  ngOnInit(): void {
    this.tabInterNbreRealisation = [
      "Vous avez une une personnalité presque toujours dominante, à l’avant-plan, et vous ferez généralement tout pour atteindre votre but.",
      "Vous préférez de beaucoup travailler en équipe plutôt que seul, car vous vous y sentez plus à l’aise et en confiance, et ceci vous permet de donner votre pleine mesure.",
      "Vous avez de la facilité à établir des relations essentielles à votre réalisation personnelle.",
      "Vous êtes un être très travailleur, extrêmement patient et constructif, et votre réussite repose essentiellement sur les efforts constants que vous déployez pour arriver à vos fins.",
      "Vous êtes un grand voyageur qui a besoin de se sentir libre de toutes contraintes pour pouvoir aller où bon vous semble et faire ce que vous avez envie de faire.",
      "Vous êtes la personne à vous créer des responsabilités si vous n’en avez pas.",
      "C’est que vous êtes quelqu’un de très indépendant, et vous ne comptez que sur vous-même pour atteindre vos buts :pour vous, la réussite n’est possible que grâce à un travail acharné.",
      "Vous êtes quelqu’un de franc et direct, ce qui vous permet d’entretenir des bons rapports avec les autres.",
      "Vous êtes un être sensible et délicat qui vit en fonction des autres et vous vous dépensez sans compter pour leur bien-être."
    ];
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

  private reductionNum(nbre:number):number{
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
  }

  private isConsonne(char:string):boolean {
    let consonnes:string[] = ['J','S','B','K','T','C','L','D','M','V','N','W','F','X','G','P','H','Q','Z','R'];
    let res:boolean = false;
    if (char.length == 1 && consonnes.indexOf(char.toUpperCase()) != -1){
      res = true;
    }
    return res;
  }

  getNbreRealisation(){
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

      this.nbreRealisation = 0;
      for (let i = 0 ; i < fullName.length ; i++){
        if (this.isConsonne(fullName[i])){
          this.nbreRealisation += this.getCode(fullName[i]);
        }
      }
      this.nbreRealisation = this.reductionNum(this.nbreRealisation);
      this.interNbreRealisation = this.tabInterNbreRealisation[this.nbreRealisation-1];
    }

  }

  get nom():string{
    return this._nom;
  }

  @Input()
  set nom(value:string){
    this._nom = value;
    this.getNbreRealisation();
  }

  get prenom():string{
    return this._prenom;
  }

  @Input()
  set prenom(value:string){
    this._prenom = value;
    this.getNbreRealisation();
  }

}
