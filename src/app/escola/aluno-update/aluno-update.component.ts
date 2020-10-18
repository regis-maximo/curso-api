import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno: Aluno;
  constructor(private router: ActivatedRoute,
    private route: Router,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.alunoService.readId(id).subscribe((aluno) => {
      this.aluno = aluno;
    })
  }

  voltar(): void {
    this.route.navigate(['/aluno-read']); 
  }

  create(): void {
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Aluno foi Alterado.');
      this.route.navigate(['/aluno-read']);
    })
  }
}
