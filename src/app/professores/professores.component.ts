import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm: FormGroup;
  public titulo = "Professores";
  public professorSelecionado: Professor;

  professores = [
    { id: 1 , nome: 'Sr. Alonso'   , disciplina: 'Portugues' },
    { id: 2 , nome: 'Sra. Marge'   , disciplina: 'Matemática' },
    { id: 3, nome: 'Sra. Angela'   , disciplina: 'Física' },
    { id: 4, nome: 'Sra. Margarida', disciplina: 'Geografia' },
    { id: 5, nome: 'Srta. Spencer' , disciplina: 'Ciencias' },
    { id: 6, nome: 'Mr. Brownie'   , disciplina: 'Informatica' },
    { id: 7, nome: 'Ms. Awdrey'    , disciplina: 'Ingles' },
  ];
  
  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
      this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado = null;
  }


}
