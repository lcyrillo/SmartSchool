import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public professorSelecionado: string;

  professores = [
    { id: 1 , nome: 'Sr. Alonso'    , disciplina: 'Portugues' },
    { id: 2 , nome: 'Sra. Marge'    , disciplina: 'Matemática' },
    { id: 3, nome: 'Sra. Angela'   , disciplina: 'Física' },
    { id: 4, nome: 'Sra. Margarida', disciplina: 'Geografia' },
    { id: 5, nome: 'Srta. Spencer' , disciplina: 'Ciencias' },
    { id: 6, nome: 'Mr. Brownie'   , disciplina: 'Informatica' },
    { id: 7, nome: 'Ms. Awdrey'    , disciplina: 'Ingles' },
  ];

  professorSelect(professor: any){
    this.professorSelecionado = professor.nome;
  }

  voltar(){
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
