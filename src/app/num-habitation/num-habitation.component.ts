import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-num-habitation',
  templateUrl: './num-habitation.component.html',
  styleUrls: ['./num-habitation.component.css']
})
export class NumHabitationComponent implements OnInit {
  adresse:string;
  nbreHabitation:number = 0;
  interNbreHabitation:string = '';
  tabInterNbreHabitation:string[];
  constructor(private numerologService: NumerologService) {
    this.adresse = '';
    this.nbreHabitation = 0;
    this.tabInterNbreHabitation = [];
    this.interNbreHabitation = '';
  }

  doCalcul(){
    this.nbreHabitation = this.numerologService.reductionChaine(this.adresse);
    if (this.nbreHabitation > 0 && this.nbreHabitation < 10){
      this.interNbreHabitation = this.tabInterNbreHabitation[this.nbreHabitation - 1];
    }
  }

  ngOnInit(): void {
    this.tabInterNbreHabitation = [
      "L’énergie de la maison #1 favorise l’innovation, l’individualité, l’ambition, le dynamisme et le leadership. La personnalité du chiffre de cette maison favorise le travail indépendant ou une carrière active. Les personnes vivant dans une maison qui a l’énergie de ce chiffre seront encouragées à renforcer leur indépendance, leur autonomie et leur liberté. Vivre dans une maison qui a le # 1 peut engendrer des leçons sur la confiance en soi, le courage, la détermination et l’échec.",
      "L’énergie de la maison #2 favorise l’inclusion, l’éducation, la sécurité, les relations amoureuses, le dévouement, et constitue un lieu de vie harmonieux. La personnalité de cette maison soutient les personnes qui souhaitent fonder une vie ensemble – les couples, les couples avec enfants, ou les meilleurs amis. Les personnes vivant dans cette maison seront encouragées à faire preuve de diplomatie et à prendre en considération les besoins de chacun. Vivre dans une maison qui a ce chiffre pourrait vous apprendre des leçons sur l’amour, les relations, la paix, l’harmonie et les émotions.",
      "C’est un endroit de communication, d’expression émotionnelle et de créativité. Son énergie favorise la socialisation, la conversation inspirante et édifiante, et l’expression artistique. La personnalité de cette maison est bénéfique pour les personnes qui veulent fonder une famille, innover et faire preuve de créativité – toute personne qui veut vivre pleinement et joyeusement se sentira bien dans cette maison. Les personnes vivant dans cette maison auront tendance à se sentir sensibles sur le plan émotionnel et à exploiter leur expression créative. Vivre dans une maison qui a ce chiffre peut vous permettre d’avoir de précieuses leçons sur la communication, les émotions, la joie et l’expression.",
      "Elle donne lieu aux processus lents et réguliers qui produisent un dynamisme de sécurité. Son énergie favorise le travail assidu, le développement/l’implantation de systèmes, l’organisation, la fidélisation et la protection. La personnalité de cette maison favorise aussi la croissance d’une entreprise, d’une famille ou de vos investissements. Les personnes vivant dans cette maison seront encouragées à prendre des actions conservatrices, à travailler dur, et à mener des activités pratiques. Vivre dans une maison qui a ce numéro peut vous apprendre des leçons précieuses sur le service, l’établissement des objectifs concrets, l’honnêteté, et la sécurité.",
      "Elle gravite autour de l’amusement, de l’intrépidité, de l’aventure et des idées progressives. Son énergie favorise la polyvalence, la flexibilité, le social et la liberté. La personnalité de cette maison favorise votre sens de la liberté grâce à l’autodiscipline – il s’agit ici d’utiliser votre liberté de façon constructive. Les personnes vivant dans cette maison seront encouragées à vivre pleinement leur vie, et à s’attaquer aux problèmes sans être pris par la peur. Vivre dans un lieu qui porte ce chiffre peut également vous apprendre des leçons essentielles sur l’acceptation, la liberté, le changement dynamique, et à faire face à vos peurs.",
      "C’est un lieu qui met en valeur le foyer et la famille. Son énergie chaleureuse et compatissante favorise un engagement au service de l’amour. La personnalité de cette maison est propice à la gestion d’une entreprise et à la création d’une famille. Les personnes vivant dans cette maison se sentiront entourées de soins et d’affectation – mais vous devez veillez à ne pas trop vous épuiser. L’énergie de la maison 6 pousse également à des tendances perfectionnistes, alors soyez conscient que vous devrez assouplir votre besoin de contrôle. C’est aussi une maison idéale si votre entreprise est orientée vers le domaine du massage, du travail énergétique, du conseil, de la décoration intérieure (tout ce qui est lié au bien-être). Si vous habitez dans cette maison, vous serez amené à prendre des leçons sur le service, et à faire confiance à vos idées visionnaires, à vos sentiments et à votre acceptation.",
      "Sa vibration porte sur la recherche spirituelle, la solitude, l’intuition et l’affinement de vos idées. Son énergie favorise la tranquillité, la recherche de l’âme, la collecte des connaissances, et la spiritualité. La personnalité de cette maison favorise le développement de votre sens de la vérité. C’est un endroit où vous pourrez vraiment prendre le temps de vous connaître en profondeur. Les personnes vivant dans cette maison seront encouragées à trouver la foi en elles, à prendre du temps pour être seules, et à en apprendre davantage sur tout ce qui les intéresse. Vivre dans une maison « 7 » peut attirer à vous des leçons sur la confiance, vos propres croyances spirituelles, votre développement personnel, et comment écouter votre intuition et découvrir qui vous êtes.",
      "Sa vibration engendre l’abondance financière et son énergie favorise le gain et ainsi que la perte, l’autorité, le contrôle et la réalisation de ces objectifs. La personnalité de cette maison vous aide à progresser dans le monde matériel. Les personnes vivant dans cette maison auront tendance à se sentir comme si l’argent et la réussite étaient une priorité absolue. Il est donc essentiel que vous veilliez à établir une bonne communication avec les membres de votre famille afin qu’ils se sentent négligés ou mis à l’écart.",
      "Elle incarne la bienfaisance et son énergie favorise la créativité, la spiritualité, l’altruisme et le pardon. La personnalité de cette maison peut vous aider à changer le monde pour le rendre meilleur. Les personnes vivant dans cette maison auront tendance à avoir l’impression d’être dans un climat très favorable. L’énergie du 9 représente l’abandon; c’est donc un endroit idéal si vous cherchez à vous soigner et à guérir les autres. Cette maison est parfaite pour tout le monde, et les personnes qui y vivent sont (ou deviennent) spirituellement évoluées. Vivre dans un tel lieu peut vous faire bénéficier de conseils avisés, de la vérité universelle, de dons de bienfaisance, et vous permettre de lâcher-prise du passé."
    ];
  }

}
