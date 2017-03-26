import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomePage {

    public regime: number;
    public categoria: number;
    public valor: string;
   // public regimes = [{id: 0, descricao: "Simples"},{id: 1, descricao: "Lucro Presumido"},{id: 2, descricao: "Lucro Real"}];
   // public categorias = [{id: 0, descricao: "Indústria"},{id: 1, descricao: "Serviço"},{id: 2, descricao: "Indústria e Serviço"}];

    constructor(public router: Router){
        
    }

    continuar(){
        let url = "/calculo/"+this.valor+"/"+this.regime+"/"+this.categoria; 
        this.router.navigate(['/calculo',this.valor,this.regime,this.categoria]);
    }
}