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

  constructor() {
    this.nom = '';
    this.prenom = '';
    this.dateNaissance = '';
  }

  ngOnInit(): void {}
}
