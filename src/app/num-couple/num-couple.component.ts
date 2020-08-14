import { Component, OnInit } from '@angular/core';
import {NumerologService} from '../numerolog.service';

@Component({
  selector: 'app-num-couple',
  templateUrl: './num-couple.component.html',
  styleUrls: ['./num-couple.component.css']
})
export class NumCoupleComponent implements OnInit {
  nom1:string;
  prenom1:string;
  dateNaissance1:string;
  cheminVie1:number;
  nbreExpression1:number;
  nbreIntime1:number;
  nom2:string;
  prenom2:string;
  dateNaissance2:string;
  cheminVie2:number;
  nbreExpression2:number;
  nbreIntime2:number;
  dicoCouplesNbresExpression:Map<string,string>;
  dicoCouplesNbresIntime:Map<string,string>;
  dicoCouplesCheminVie:Map<string,string>;
  interNbresExpression:string;
  interNbresIntimes:string;
  interCheminVie:string;

  constructor(private numerologService: NumerologService) {
    this.interNbresExpression = '';
    this.interNbresIntimes = '';
    this.interCheminVie = '';
    this.dicoCouplesNbresExpression = new Map<string,string>();
    this.dicoCouplesNbresIntime = new Map<string,string>();
    this.dicoCouplesCheminVie = new Map<string,string>();
    this.interNbresExpression = '';
    this.interNbresIntimes = '';
    this.interCheminVie = '';
  }

  ngOnInit(): void {
    this.nom1 = '';
    this.prenom1 = '';
    this.cheminVie1 = 0;
    this.nbreExpression1 = 0;
    this.nbreIntime1 = 0;
    this.nom2 = '';
    this.prenom2 = '';
    this.cheminVie2 = 0;
    this.nbreExpression2 = 0;
    this.nbreIntime2 = 0;
    this.dicoCouplesNbresExpression = this.getDicoCouplesNbresExpression();
    this.dicoCouplesNbresIntime = this.getDicoCouplesNbresIntime();
    this.dicoCouplesCheminVie = this.getDicoCouplesCheminVie();
  }

  private getDicoCouplesNbresExpression():Map<string,string> {
    let dico:Map<string,string> = new Map<string, string>();
    dico.set('1-6',"Ici un caractère individualiste rencontre un caractère qui nourrit l'union avec les autres. Ces deux profils s'équilibrent et se complètent.");
    dico.set('6-1',"Ici un caractère individualiste rencontre un caractère qui nourrit l'union avec les autres. Ces deux profils s'équilibrent et se complètent.");
    dico.set('2-7',"L'art d'être en relation du 2 rencontre l'esprit concentré solitaire du 7.");
    dico.set('7-2',"L'art d'être en relation du 2 rencontre l'esprit concentré solitaire du 7.");
    dico.set('3-8',"Le plaisir et l'art rencontrent le succès matèriel. Ici le profil joyeux et tourné vers les arts et la beauté du 3 rencontre la réalité matérielle incarnée par le 8.");
    dico.set('8-3',"Le plaisir et l'art rencontrent le succès matèriel. Ici le profil joyeux et tourné vers les arts et la beauté du 3 rencontre la réalité matérielle incarnée par le 8.");
    dico.set('4-9','La structure rencontre la spiritualité. Le 4 fournit une fondation solide, il conseille, guide et organise.');
    dico.set('9-4','La structure rencontre la spiritualité. Le 4 fournit une fondation solide, il conseille, guide et organise.');
    return dico;
  }

  private getDicoCouplesNbresIntime():Map<string, string> {
    let dico:Map<string,string> = new Map<string,string>();
    dico.set('2-4','Les deux énergies sont stables indépendamment mais combinées elles renforcent encore cette stabilité.');
    dico.set('4-2','Les deux énergies sont stables indépendamment mais combinées elles renforcent encore cette stabilité.');
    dico.set('3-5',"Ces deux énergies s'incarnent dans le monde, dans l'action et l'expérience.Elles se soutiennent mutuellement dans leur réalisation.");
    dico.set('5-3',"Ces deux énergies s'incarnent dans le monde, dans l'action et l'expérience.Elles se soutiennent mutuellement dans leur réalisation.");
    dico.set('6-8',"Ces deux énergies s'accordent pour fonder une famille avec une base solide. Les deux recherchent le succès extérieur, le confort et la sécurité");
    dico.set('8-6',"Ces deux énergies s'accordent pour fonder une famille avec une base solide. Les deux recherchent le succès extérieur, le confort et la sécurité");
    dico.set('7-9',"Ces deux énergies réfléchissent le monde, l'analyse et se dévouent à apporter leur pierre à la vérité et au progrès. Les deux sont des essences spirituelles");
    dico.set('9-7',"Ces deux énergies réfléchissent le monde, l'analyse et se dévouent à apporter leur pierre à la vérité et au progrès. Les deux sont des essences spirituelles");
    return dico;
  }

  private getDicoCouplesCheminVie():Map<string, string>{
    let dico:Map<string, string> = new Map<string, string>();
    dico.set('1-7','Le 1 et le 7 sont des chemins relativement individualistes et indépendants.');
    dico.set('7-1','Le 1 et le 7 sont des chemins relativement individualistes et indépendants.');
    dico.set('2-6',"Les chemins de vie 2 et 6, contrairement à la paire précédente, s'incrivent dans les relations aux autres");
    dico.set('6-2',"Les chemins de vie 2 et 6, contrairement à la paire précédente, s'incrivent dans les relations aux autres");
    dico.set('3-9',"Ces deux chemins de vie se tournent vers de grands idéaux au service de tous, et vers la beauté");
    dico.set('9-3',"Ces deux chemins de vie se tournent vers de grands idéaux au service de tous, et vers la beauté");
    dico.set('4-8','Le 4 structure, le 8 construit. Ce sont donc des énergies de chemin de vie très compatibles, qui avancent souvent au même rythme et se stimulent');
    dico.set('8-4','Le 4 structure, le 8 construit. Ce sont donc des énergies de chemin de vie très compatibles, qui avancent souvent au même rythme et se stimulent');
    return dico;
  }

  calculateNumbers(){
    let fullName1:string = `${this.nom1} ${this.prenom1}`;
    this.nbreExpression1 = this.numerologService.getNbreExpression(fullName1);
    this.nbreIntime1 = this.numerologService.getNbreIntime(fullName1);
    this.cheminVie1 = this.numerologService.getCheminVie(this.dateNaissance1);
    let fullName2:string = `${this.nom2} ${this.prenom2}`;
    this.nbreExpression2 = this.numerologService.getNbreExpression(fullName2);
    this.nbreIntime2 = this.numerologService.getNbreIntime(fullName2);
    this.cheminVie2 = this.numerologService.getCheminVie(this.dateNaissance2);
    let coupleNbreExpression:string = `${this.nbreExpression1}-${this.nbreExpression2}`;
    if (this.dicoCouplesNbresExpression.has(coupleNbreExpression)){
      this.interNbresExpression = this.dicoCouplesNbresExpression.get(coupleNbreExpression);
    }
    let coupleNbreIntime:string = `${this.nbreIntime1}-${this.nbreIntime2}`;
    if (this.dicoCouplesNbresIntime.has(coupleNbreIntime)){
      this.interNbresIntimes = this.dicoCouplesNbresIntime.get(coupleNbreIntime);
    }
    let coupleCheminVie:string = `${this.cheminVie1}-${this.cheminVie2}`;
    if (this.dicoCouplesCheminVie.has(coupleCheminVie)){
      this.interCheminVie = this.dicoCouplesCheminVie.get(coupleCheminVie);
    }
  }

}
