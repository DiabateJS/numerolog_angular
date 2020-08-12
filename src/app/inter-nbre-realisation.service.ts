import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreRealisationService {
  private _tabInterNbreRealisation:string[];

  constructor() {
    this._tabInterNbreRealisation = [
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

  getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
        interNbre = this._tabInterNbreRealisation[nbre-1];
    }
    return interNbre;
  }
}
