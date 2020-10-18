import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = 
    {
    name: '',
    curso: ''
    };
  
  constructor(private router: Router, 
    private alunoService: AlunoService) { }

  ngOnInit(): void {}

  voltar(): void {
    this.router.navigate(['/']);
  }

  create(): void {
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Aluno cadastrado com sucesso.');
      this.router.navigate(['/']);
    })
  }
}
