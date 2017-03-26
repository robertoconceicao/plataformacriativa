import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

var numeral = require('numeral');

const INDEX_PROJETO = 0;
const INDEX_LOCAL = 1;
const INDEX_AREA = 2;
const INDEX_PROPONENTE = 3;
const INDEX_INCENTIVADOR = 4;
const INDEX_VALOR_APROVADO = 5;


const ID_FIA = 0;
const ID_ROUANET = 1;
const ID_FRANKLIN = 2;
const ID_PRONON = 3;
const ID_PRONAS = 4;
const ID_FUNDO_IDOSO = 5;

export class Projeto {
  nome: string;
  local: string;
  area: string;
  proponente: string;
  incentivador: string;
  vlaprovado: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  title = 'Calculadora Plataforma Criativa';
  @Input() valorReal;


  public csvUrl: string = 'projetos.csv';  // URL to web API
  public csvData: any[] = [];

  public programas = [{id: ID_FIA, nome: "FIA", valor: 1212, descricao:"Fundo da Infância e adolescencia", renunciaFiscal: 0.00, comissaoplataforma: 0},
    {id: ID_ROUANET,nome: "Rouanet", valor: 48000000, descricao:"Rouanet", renunciaFiscal: 0.04, comissaoplataforma: 0.10},
    {id: ID_FRANKLIN,nome: "Franklin Cascaes", valor: 1212, descricao:"Franklin Cascaes", renunciaFiscal: 0.20, comissaoplataforma: 0.06},
    {id: ID_PRONON,nome: "PRONON", valor: 1212, descricao:"Programa Nacional de Apoio à Atenção Oncológica", renunciaFiscal: 0.00, comissaoplataforma: 0},
    {id: ID_PRONAS,nome: "PRONAS/PCD", valor: 1212, descricao:"Programa Nacional de Apoio à Atenção da Saúde da Pessoa com Deficiência", renunciaFiscal: 0.00, comissaoplataforma: 0},
    {id: ID_FUNDO_IDOSO,nome: "Fundo do Idoso", valor: 1212, descricao:"Fundo do Idoso", renunciaFiscal: 0.00, comissaoplataforma: 0}
  ];

  public issqn = 0.02;
  public renunciaFiscal = 0.20;

  public programasAtende = new Array();

  public projetos = new Array<Projeto>();

  constructor (private http: Http) {
    this.readCsvData ();
  }
  
  calcular(){
    console.log("Valor: "+numeral(this.valorReal).value());
    console.log("calculaImpostoRenda: "+this.calculaImpostoRenda());
    console.log("calculaValordeinvestimento: "+this.calculaValordeinvestimento());
    console.log("calculaGanhoPlataforma: "+this.calculaGanhoPlataforma());

    for(let programa of this.programas){

    }
  }

  calculaImpostoRenda(){
    return numeral(this.valorReal).value() * this.issqn;
  }

  calculaValordeinvestimento(){
    return this.calculaImpostoRenda() * this.renunciaFiscal;
  }

  calculaGanhoPlataforma(){

  }
  
  readCsvData () {
    this.http.get(this.csvUrl)
    .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(';');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(';');
        if (data.length == headers.length) {
            let projeto: Projeto;
            for ( let j = 0; j < headers.length; j++) {
                projeto = new Projeto();
                projeto.nome = data[INDEX_PROJETO];
                projeto.local = data[INDEX_LOCAL];
                projeto.area = data[INDEX_AREA];
                projeto.proponente = data[INDEX_PROPONENTE];
                projeto.incentivador = data[INDEX_INCENTIVADOR];
                projeto.vlaprovado = data[INDEX_VALOR_APROVADO];
            }
            this.projetos.push(projeto);
        }
    }    
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
  */
}
