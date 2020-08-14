import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-num-entreprise',
  templateUrl: './num-entreprise.component.html',
  styleUrls: ['./num-entreprise.component.css']
})
export class NumEntrepriseComponent implements OnInit {
  nom:string;
  numeroPorte:string;
  dateLancement:string;
  chiffreResultat:number;
  interChiffre:string;
  tabInterChiffre:string[];

  constructor(private numerologService: NumerologService) {
    this.nom = '';
    this.numeroPorte = '';
    this.dateLancement = '';
    this.chiffreResultat = 0;
    this.interChiffre = '';
    this.tabInterChiffre = [];
  }

  ngOnInit(): void {
    this.tabInterChiffre = [
      "Le numéro 1 caractérise les entreprises énergiques, puissantes, fiables et justes. Vous allez atteindre les objectifs proposés honnêtement et équitablement. Entreprises idéales: comptabilité, financement et immobilier.",
      "Société qui se battra pour une cause ou une idée et qui pourrait être liée à son succès. Si vous étudiez le chemin que vous souhaitez emprunter, vous atteindrez plus facilement les objectifs.",
      "Caractérisé par la fertilité et la communication. Si vous croyez en vos rêves, vous réussirez. Entreprises idéales : publicité, communication et créativité.",
      "Ce n’est pas un numéro professionnel, bien qu’il représente l’ordre et l’organisation, ainsi qu’un accès facile aux quatre coins du monde.",
      "L’inspiration et l’intelligence régissent les entreprises du groupe 5. Celles-ci doivent rester organisées et disciplinées, car elles sont généralement associées à des entreprises composées de nombreuses personnes. Entreprises idéales: tourisme et loisirs.",
      "Compagnie inspirée par la beauté. Ce chiffre dégage une énergie très accueillante et favorise des environnements équilibrés. Entreprises idéales: hôtels et pensions, institut de beauté, esthétique, restaurant ou snack-bar.",
      "Société ayant tendance à l’introspection. Le chiffre 7 attire les énergies émotionnelles et favorise l’isolement et la réflexion. Comme il est difficile d’établir des harmonies, ce n’est pas un nombre approprié pour les nouvelles entreprises.",
      "La concurrence et l’argent régissent les entreprises du numéro 8. Cela attire une bonne énergie, des possibilités d’affaires et une génération de richesse. Entreprises idéales: courtiers financiers.",
      "Comptez sur plusieurs fermetures. Vous devez apprendre à faire face au changement pour réussir et être plus flexible dans votre domaine d’activité. Mauvais numéro pour les entreprises car il est en constante évolution."
    ];
  }

  doCalcul(){
    let fullData = `${this.nom} ${this.numeroPorte} ${this.dateLancement}`;
    let somme:number = 0;
    for (let i = 0 ; i < fullData.length ; i++){
      somme += this.numerologService.getCode(fullData[i]);
    }
    this.chiffreResultat = this.numerologService.reductionNum(somme);
    if (this.chiffreResultat > 0 && this.chiffreResultat < 10){
      this.interChiffre = this.tabInterChiffre[this.chiffreResultat-1];
    }
  }

}
