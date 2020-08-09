import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  annee:number = 2020;
  mois:string = "Aout";
  lien:string="http://djstechnologies.fr";
  labelLien:String = "djstechnologies.fr";
  entreprise:string = "DJS Technologies";
  constructor() { }

  ngOnInit(): void {
  }

}
