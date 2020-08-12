import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterCheminVieService {
  private _tabInterCheminVie:string[];
  constructor() {
    this._tabInterCheminVie = [
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

  getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
      interNbre = this._tabInterCheminVie[nbre-1];
    }
    return interNbre;
  }
}
