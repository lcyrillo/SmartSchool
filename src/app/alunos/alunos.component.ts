import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1 , nome: 'Marta', sobrenome: 'Kent'    , telefone: 33225555 },
    { id: 2 , nome: 'Paula', sobrenome: 'Isabela' , telefone: 33225544 },
    { id: 3 , nome: 'Laura', sobrenome: 'Antonia' , telefone: 33225500 },
    { id: 4 , nome: 'Luiza', sobrenome: 'Maria'   , telefone: 33225511 },
    { id: 5 , nome: 'Lucas', sobrenome: 'Machado' , telefone: 33225533 },
    { id: 6 , nome: 'Pedro', sobrenome: 'Alvares' , telefone: 33225522 },
    { id: 7 , nome: 'Paulo', sobrenome: 'José'    , telefone: 33225566 },
  ];

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar(){
    this.alunoSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
