import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'calculo',
  templateUrl: './calculo.html'
})
export class CalculoPage implements OnInit {

    public regime: number;
    public categoria: number;
    public valor: string; 
    public regimes = [{id: 0, descricao: "Simples"},{id: 1, descricao: "Lucro Presumido"},{id: 2, descricao: "Lucro Real"}];
    public categorias = [{id: 0, descricao: "Indústria"},{id: 1, descricao: "Serviço"},{id: 2, descricao: "Indústria e Serviço"}];


    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.valor = params['valor'];
            this.regime = params['regime'];
            this.categoria = params['categoria'];

            console.log("Valor: "+this.valor+" regime: "+this.regime+" categoria: "+this.categoria);
        });
    }
    continuar(){

    }
}