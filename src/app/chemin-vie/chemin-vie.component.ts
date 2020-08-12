import {Component, Input, OnInit} from '@angular/core';
import {NumerologService} from '../numerolog.service';
import {InterCheminVieService} from '../inter-chemin-vie.service';

@Component({
  selector: 'app-chemin-vie',
  templateUrl: './chemin-vie.component.html',
  styleUrls: ['./chemin-vie.component.css']
})
export class CheminVieComponent implements OnInit {
  private _dateNaissance:string;
  cheminVie:number;
  interCheminVie:string;

  constructor(private numerologService: NumerologService,
              private interCheminVieService: InterCheminVieService) {
    this._dateNaissance = '';
    this.cheminVie = 0;
    this.interCheminVie = '';
  }

  ngOnInit(): void {
  }

  private getCheminVie(){
    //Calcul chemin de vie
    this.cheminVie = this.numerologService.getCheminVie(this._dateNaissance);
    this.interCheminVie = this.interCheminVieService.getInterNbre(this.cheminVie);
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
