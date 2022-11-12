import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesEliminados:string[] = [];

  eliminar():void {
    let heroeEliminado:string='';
    if(this.heroes.length>0){
      heroeEliminado = this.heroes.shift() || '';
      this.heroesEliminados.push(heroeEliminado);
      console.log(this.heroesEliminados);

    }
  }
}
