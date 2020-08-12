import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreIntimeService {
  private _tabInterNbreIntime:string[];
  constructor() {
    this._tabInterNbreIntime = [
      "Motivation : force intérieure qui nous pousse à nous réaliser.",
      "Vous êtes une personne profondément sincère qui désire avant tout être en paix et en harmonie avec ce qui vous entoure",
      "Vous êtes à la fois un être énergique et souple qui sait s'ajuster à toutes les situations.",
      "Travail et recherche de stabilité : C'est dans le travail que vous cherchez à vous réaliser.",
      "Vous êtes quelqu’un qui a horreur de la routine : vous vous intéressez à tout.",
      "Le 6 est constamment tourné vers les autres et ne peut vivre sans l’idéal de servir.",
      "Votre nombre est le 7, le nombre inné de la perfection.",
      "Vous êtes une personne ambitieuse qui veut intensément réussir.",
      "Pour bien vous définir , il faudrait parler d’amour et de compassion, d’humanité : vous ne supportez pas les souffrances de l’humanité."
    ];
  }

  getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
      interNbre = this._tabInterNbreIntime[nbre-1];
    }
    return interNbre;
  }
}
