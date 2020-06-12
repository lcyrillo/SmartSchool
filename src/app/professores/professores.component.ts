import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores";

  professores = [
    { nome: 'Sr. Alonso'     },
    { nome: 'Sra. Marge'     },
    { nome: 'Sra. Angela'    },
    { nome: 'Sra. Margarida' },
    { nome: 'Srta. Spencer'  },
    { nome: 'Mr. Brownie'    },
    { nome: 'Ms. Awdrey'     }
  ];

  constructor() { }

  ngOnInit() {
  }

}
