import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-numerologique',
  templateUrl: './theme-numerologique.component.html',
  styleUrls: ['./theme-numerologique.component.css']
})
export class ThemeNumerologiqueComponent implements OnInit {
  nom:string;
  prenom:string;
  dateNaissance:string;
  matrice:number[][];
  nbresDominants:number[];
  nbresManquants:number[];
  tabInterNbresManquants:string[];
  tabInterNbresDominants:string[];
  intersNbresManquants:string[];
  intersNbresDominants:string[];
  dicoNbresManquants:Map<number,string>;
  dicoNbresDominants:Map<number,string>;
  nbreHereditaire:number;
  interNbreHereditaire:string;
  nbreActif:number;
  interNbreActif:string;
  nbreIntime:number;
  interNbreIntime:string;
  nbreRealisation:number;
  interNbreRealisation:string;
  nbreExpression:number;
  interNbreExpression:string;
  cheminVie:number;
  interCheminVie:string;
  tabInterNbreHereditaire:string[];
  tabInterNbreActif:string[];
  tabInterNbreIntime:string[];
  tabInterNbreRealisation:string[];
  tabInterNbreExpression:string[];
  tabInterCheminVie:string[];

  constructor() {
    this.nom = "";
    this.prenom = "";
    this.matrice = [];
    this.nbresManquants = [];
    this.nbresDominants = [];
    this.tabInterNbresManquants = [];
    this.tabInterNbresDominants = [];
    this.intersNbresManquants = [];
    this.intersNbresDominants = [];
    this.dicoNbresManquants = new Map<number,string>();
    this.dicoNbresDominants = new Map<number,string>();
    this.nbreHereditaire = 0;
    this.tabInterNbreHereditaire = [];
    this.interNbreHereditaire = "";
    this.nbreActif = 0;
    this.interNbreActif = "";
    this.tabInterNbreActif = [];
    this.nbreIntime = 0;
    this.interNbreIntime = "";
    this.tabInterNbreIntime = [];
    this.nbreRealisation = 0;
    this.interNbreRealisation = "";
    this.tabInterNbreRealisation = [];
    this.nbreExpression = 0;
    this.interNbreExpression = "";
    this.tabInterNbreExpression = [];
    this.cheminVie = 0;
    this.interCheminVie = "";
    this.tabInterCheminVie = [];
  }

  ngOnInit(): void {
    this.matrice = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

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

    this.tabInterNbresDominants = [
      "il caractérise l'autorité et la volonté.",
      "il indique une esprit de coopération et la recherche de l'union.",
      "il montre votre aisance en société et votre sens des relations.",
      "il atteste de vos qualités d'ordre et de persévérance dans le travail.",
      "c'est l'indication du mouvement et des voyages. Vous faites preuve d'un esprit large.",
      "il indique la recherche de l'harmonie et de l'accord. Vous avez le sens de la famille. C'est le signe de l'amour et de l'amitié.",
      "il révèle des qualités d'invention et de recherche. Parfois, il montre un engagement dans un idéal.",
      "il révèle la recherche de la réussite à tous niveaux. Il signale une certaine chance matérielle.",
      "c'est le signe de la qualité de dévouement et d'altruisme."
    ];

    this.tabInterNbreHereditaire = [
      "Courage, assurance, audace, aplomb.",
      "Équilibre, Sociabilité, Bon sens, Amabilité.",
      "Créativité, Adaptabilité, Inventivité, Expression.",
      "Méthode, Ordre, Minutie, Rigueur et Ténacité.",
      "Combativité, Ardeur, Résistance.",
      "Justice, Générosité, Honnêteté.",
      "Raison, Sagesse, Bon sens, Modération.",
      "Autorité, Détermination, Influence.",
      "Dignité, Fierté, Amour-propre."
    ];

    this.tabInterNbreActif = [
      "Votre nombre actif est le 1, c’est le nombre le plus fort, mais certainement le plus difficile à porter. ",
      "Vous êtes à la recherche d’un équilibre de vie, de l’harmonie avec votre entourage.",
      "Original et intelligent, vous saurez habilement trouver votre talent que ce soit en art graphique ,plastique ou dramatique.",
      "Vous êtes des personnes équilibrées, structurées, et vous aimez bien savoir où vous vous en allez avant d'agir.",
      "Que l’on vous propose de lancer de nouveaux produits, de faire des voyages ou de modifier votre environnement, vous faites preuve d'un enthousiasme débordant.",
      "Le bonheur est votre seule et unique préoccupation, alors vous recherchez surtout une certaine harmonie familiale.",
      "Douées d'une intelligence forte, supérieure à la moyenne, vous aimez faire le tour de la question avant de vous engager dans une voie précise.",
      "Vous ne sauriez accepter que quelqu'un ne soit pas reconnu pour sa valeur ou ses performances.",
      "Vous êtes doué d’une sensibilité intense qui influence non seulement vos réalisations, mais également votre comportement."
    ];
    this.tabInterNbreIntime = [
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
    this.tabInterNbreExpression = [
      "Peu importe leur spécialité ,les personnes de type 1 recherchent des postes de commande.",
      "Vous avez besoin d’une tendance harmonieuse sans querelle ni dispute.Vous êtes émotif (ve).",
      "Vous êtes sociable, enthousiaste et optimiste.",
      "Vous êtes entêté(e) et capable de tout pour obtenir ce que vous désirez.",
      "Vous êtes souvent prêt(e) à tout remettre en question mais vos qualités d’adaptation vous permettent de vous sortir de toutes les situations.",
      "Vous avez le sens de la beauté et êtes amoureux(se) de belles choses.",
      "Votre Hypersensibilité vous pousse à être instable dans votre comportement.",
      "Vous pouvez être dur(e) et agressif(ve) envers les personnes qui ne vous intéressent pas.",
      "Vous êtes cependant réservé(e) et indépendant(e)."
    ];
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

  private getInterNbreManquant(nbre:number):string {
    let res:string = "";
    if (this.tabInterNbresManquants){
        res = this.tabInterNbresManquants[nbre-1];
    }
    return res;
  }

  private getInterNbreDominant(nbre:number):string {
    let res:string = "";
    if (this.tabInterNbresDominants){
      res = this.tabInterNbresDominants[nbre-1];
    }
    return res;
  }


  private getCode(char):number {
    let res:number = 0;
    let tabUn = ['A','J','S'];
    let tabDeux = ['B','K','T'];
    let tabTrois = ['C','L','U'];
    let tabQuatre = ['D','M','V'];
    let tabCinq = ['E','N','W'];
    let tabSix = ['F','O','X'];
    let tabSept = ['G','P','Y'];
    let tabHuit = ['H','Q','Z'];
    let tabNeuf = ['I','R'];
    if (tabUn.indexOf((char.toUpperCase())) != -1)
      res = 1;
    if (tabDeux.indexOf((char.toUpperCase())) != -1)
      res = 2;
    if (tabTrois.indexOf((char.toUpperCase())) != -1)
      res = 3;
    if (tabQuatre.indexOf((char.toUpperCase())) != -1)
      res = 4;
    if (tabCinq.indexOf((char.toUpperCase())) != -1)
      res = 5;
    if (tabSix.indexOf((char.toUpperCase())) != -1)
      res = 6;
    if (tabSept.indexOf((char.toUpperCase())) != -1)
      res = 7;
    if (tabHuit.indexOf((char.toUpperCase())) != -1)
      res = 8;
    if (tabNeuf.indexOf((char.toUpperCase())) != -1)
      res = 9;
    return res;
  }

  private reductionNum(nbre:number):number{
    let res:number = 0;
    if (nbre != 0)
      res = nbre % 9 == 0 ? 9 : nbre % 9;
    return res;
  }

  private isVoyelle(char:string):boolean {
    let voyelles:string[] = ['A','E','O','U','I','Y'];
    let res:boolean = false;
    if (char.length == 1 && voyelles.indexOf(char.toUpperCase()) != -1){
        res = true;
    }
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

  calculTheme(){
    let fullName = `${this.nom}${this.prenom}`;
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
    let tabOccurences = [nbre1,nbre2,nbre3,nbre4,nbre5,nbre6,nbre7,nbre8,nbre9];
    //Ligne 1
    this.matrice[0][0] = nbre1;
    this.matrice[0][1] = nbre2;
    this.matrice[0][2] = nbre3;
    //Ligne 2
    this.matrice[1][0] = nbre4;
    this.matrice[1][1] = nbre5;
    this.matrice[1][2] = nbre6;
    //Ligne 3
    this.matrice[2][0] = nbre7;
    this.matrice[2][1] = nbre8;
    this.matrice[2][2] = nbre9;
    this.nbresManquants = [];
    this.nbresDominants = [];
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
    //Calcul de la moyenne des occurrences
    let moy = 0;
    let som = 0;
    for (let i = 0 ; i < tabOccurences.length ; i++){
      som += tabOccurences[i];
    }
    moy = Math.round(som / tabOccurences.length);
    //Sélection des nombres dominants et interpretation
    let max = 0;
    for (let i = 0 ; i < tabOccurences.length ; i++){
      if (tabOccurences[i] > moy){
        this.nbresDominants.push(i+1);
      }
    }
    //Interpretation nombres dominants
    for (let i = 0 ; i < this.nbresDominants.length ; i++){
      this.dicoNbresDominants.set(this.nbresDominants[i],this.getInterNbreDominant(this.nbresDominants[i]));
      this.intersNbresDominants.push(this.getInterNbreDominant(this.nbresDominants[i]));
    }

    //Calcul nombre héréditaire
    this.nbreHereditaire = 0;
    for (let i = 0 ; i < this.nom.length ; i++){
      this.nbreHereditaire += this.getCode(this.nom[i]);
    }
    this.nbreHereditaire = this.reductionNum(this.nbreHereditaire);
    this.interNbreHereditaire = this.tabInterNbreHereditaire[this.nbreHereditaire-1];
    //Calcul nombre actif
    this.nbreActif = 0;
    for (let i = 0 ; i < this.prenom.length ; i++){
      this.nbreActif += this.getCode(this.prenom[i]);
    }
    this.nbreActif = this.reductionNum(this.nbreActif);
    this.interNbreActif = this.tabInterNbreActif[this.nbreActif-1];
    //Calcul nombre intime
    this.nbreIntime = 0;
    for (let i = 0 ; i < fullName.length ; i++){
      if (this.isVoyelle(fullName[i])){
          this.nbreIntime += this.getCode(fullName[i]);
      }
    }
    this.nbreIntime = this.reductionNum(this.nbreIntime);
    this.interNbreIntime = this.tabInterNbreIntime[this.nbreIntime-1];
    //Calcul nombre réalisation
    this.nbreRealisation = 0;
    for (let i = 0 ; i < fullName.length ; i++){
        if (this.isConsonne(fullName[i])){
            this.nbreRealisation += this.getCode(fullName[i]);
        }
    }
    this.nbreRealisation = this.reductionNum(this.nbreRealisation);
    this.interNbreRealisation = this.tabInterNbreRealisation[this.nbreRealisation-1];
    //Calcul nombre expression
    this.nbreExpression = 0;
    for (let i = 0 ; i < fullName.length ; i++){
      this.nbreExpression += this.getCode(fullName[i]);
    }
    this.nbreExpression = this.reductionNum(this.nbreExpression);
    this.interNbreExpression = this.tabInterNbreExpression[this.nbreExpression-1];
    //Calcul chemin de vie
    this.cheminVie = 0;
    let tabDateNais:string[] = this.dateNaissance ? this.dateNaissance.split("-") : [];
    if (tabDateNais.length == 3){
        this.cheminVie += parseInt(tabDateNais[0]) + parseInt(tabDateNais[1]) + parseInt(tabDateNais[2]);
        this.cheminVie = this.reductionNum(this.cheminVie);
    }
    this.interCheminVie = this.tabInterCheminVie[this.cheminVie-1];

  }

}
