import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'resultado',
  templateUrl: './resultado.html'
})
export class ResultadoPage {

    public regime: number;
    public categoria: number;
    public regimes = [{id: 0, descricao: "Simples"},{id: 1, descricao: "Lucro Presumido"},{id: 2, descricao: "Lucro Real"}];
    public categorias = [{id: 0, descricao: "Indústria"},{id: 1, descricao: "Serviço"},{id: 2, descricao: "Indústria e Serviço"}];



}