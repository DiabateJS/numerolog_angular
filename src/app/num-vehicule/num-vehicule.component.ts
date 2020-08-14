import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-num-vehicule',
  templateUrl: './num-vehicule.component.html',
  styleUrls: ['./num-vehicule.component.css']
})
export class NumVehiculeComponent implements OnInit {
  immatriculation:string;
  nbreImmatriculation:number;
  tabInterNbreImmatriculation:string[];
  interNbreImmatriculation:string;

  constructor(private numerologService: NumerologService) {
    this.immatriculation = '';
    this.nbreImmatriculation = 0;
    this.interNbreImmatriculation = '';
  }

  ngOnInit(): void {
    this.tabInterNbreImmatriculation = [
        "véhicule pour départ (on n’en revient pas ? ). Favorise les démarches, les initiatives. Typé masculin avec des couleurs plutôt vives et un certain punch moteur mais peut aussi se contenter de rouler en première…Trajet à sens, directs, faits pour l’autoroute. Convient aux véhicules principaux, nerveux, conduite dynamique sujette aux excès. Première main ou neuf.",
        "Véhicule pour retour, d’assistance, une seconde peau. Typé féminin, couleurs plus sombres ; lent et discret, roule en seconde… Trajets hésitants, sinueux, pour faire les courses, à prêter ou à louer. Véhicule secondaire, conduite souple. Seconde main.",
        "Véhicule de ville, pour tout. Typé jeune ou pour enfants. Vif et réactif, se fait remarquer, aime la troisième ? Tout trajet, tourisme, nombreux aller-retours, pour se faire plaisir également. A priori plutôt petit et valorisant sauf si pour enfants. Une petite décapotable ?",
        "Véhicule professionnel, utilitaire, fiable, solide, pratique, bonne voiture. Le 4 est bon pour une caisse. Trajets nécessaires, sobres et plutôt lent et prudent. Roule en quatrième ?",
        "Véhicule rapide, sportif ou outil de séduction ? Favorise une conduite speed, vive et impulsive avec prise de risque, attention ! Bien pour les livraisons (coursier), la pub. Nombreux et tout type de trajet mais souvent. Roule en cinquième ? Sinon véhicule destiné à la liberté de déplacement.",
        "Véhicule familial voire utilitaire, ne tirez pas sur l’ambulance ! Confortable, amortisseurs souples, côté pépère et tranquille. Peut aussi dans certains cas prendre les traits d’un véhicule élégant et harmonieux mais plus rare. Trajets de groupe, famille, obligatoires ou soin.",
        "Le nombre parfait à priori pour un véhicule : fiabilité et excellence au rendez-vous ! C’est la machine qui fait corps avec vous, qui se pilote en donnant du plaisir, l’alter ego automobile. Convient aux véhicules particuliers, spéciaux, uniques (ce sont les vôtres) . Favorise les voyages (au bord de la mer?) et la conduite en général.",
        "Véhicule solennel, à priori imposant et puissant voire officiel (un corbillard ?). Peut être un camion ou se prend comme tel. Favorise une conduite affirmée et franche, qui pousse ou tracte… Le noir lui va si bien ! N’oublions pas le 4×4=8, le tout-terrain, le franchisseur. Attention aux obstacles et mauvaises rencontres sur la route, véhicule plutôt frontal…Sinon véhicule efficace et très utilisé.",
        "Véhicule de grande taille, de grand tourisme ou de luxe pour voyager et emmener du monde ou pour afficher son élitisme. Goût pour les grands espaces en dehors de toute limite, tendance à la transgression par le dépassement des limites. Lien avec l’étranger."
    ];
  }

  doCalcul(){
    this.nbreImmatriculation = this.numerologService.reductionChaine(this.immatriculation);
    if (this.nbreImmatriculation > 0 && this.nbreImmatriculation < 10){
        this.interNbreImmatriculation = this.tabInterNbreImmatriculation[this.nbreImmatriculation-1];
    }
  }

}
