import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}} desde NG</h1>

        <input type="number"  placeholder="Ingrese la base" >
        <button (click)="acumular(base);">+{{base}}</button>
        <span>{{ contador }}</span>
        <button (click)="acumular(-base);">-{{base}}</button>    
        `
})
export class ContadorComponent{
    titulo:string = 'App contador';
    contador:number = 0;
    base:number = 5;
  
    acumular(valor:number){
      this.contador+=valor;
    }
}