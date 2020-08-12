import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-chemin-vie',
  templateUrl: './chemin-vie.component.html',
  styleUrls: ['./chemin-vie.component.css']
})
export class CheminVieComponent implements OnInit {
  private _dateNaissance:string;
  cheminVie:number;
  interCheminVie:string;
  tabInterCheminVie:string[];

  constructor(private numerologService: NumerologService) {
    this._dateNaissance = '';
    this.cheminVie = 0;
    this.interCheminVie = '';
    this.tabInterCheminVie = [];
  }

  ngOnInit(): void {
      this.tabInterCheminVie = [
        "La vie vous pousse à faire votre chemin tout seul, sans aide, mais rien ne viendra entraver votre progression.",
        "Vous devez toujours vous rappeler que ce que vous faites, vous le faites toujours mieux avec les autres. ",
        "On vous retrouve souvent sur scène, mais votre esprit créateur et imaginatif vous permet de réussir dans toutes les activités artistiques en général.",
        "Vous avez l’amour du travail bien fait et de la régularité.",
        "C’est le chemin qui contient d’énormes possibilités et qui promets une vie passionnante.",
        "Sur ce chemin, vous aurez des choix difficiles à faire car ce n’est pas toujours évident de s’engager dans la bonne direction.",
        "Vous êtes une personne mystique, hautement intuitive et philosophe, parfaitement capable d’analyser et de trouver les raisons à vos problèmes ou à vos déceptions.",
        "Si vous vivez en harmonie avec les exigences de ce nombre, le résultat sera une grande réussite matérielle; vécu négativement, ce sera une route de karma, le négatif appelant les choses négatives.",
        "C’est un chemin difficile si vous ne savez pas vous dépouiller de vos ambitions personnelles, mais généralement, les gens qui sont sur ce chemin ont un sens inné et très développé de la compassion et de profonde humanité."
      ];
  }

  private getCheminVie(){
    //Calcul chemin de vie
    this.cheminVie = this.numerologService.getCheminVie(this._dateNaissance);
    this.interCheminVie = this.tabInterCheminVie[this.cheminVie-1];
  }

  get dateNaissance():string{
    return this._dateNaissance;
  }

  @Input()
  set dateNaissance(value:string){
    this._dateNaissance = value;
    this.getCheminVie();
  }

}
