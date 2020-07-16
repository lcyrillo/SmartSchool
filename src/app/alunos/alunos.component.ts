import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
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

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }

}
