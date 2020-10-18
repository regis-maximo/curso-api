import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  aluno: Aluno;
  
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id'); 
    this.alunoService.readId(id).subscribe((aluno) => {
      this.aluno = aluno;
    })
  }

  voltar(): void {
    this.router.navigate(['/aluno-read']);
  }

  delete(): void {
    let id = this.route.snapshot.paramMap.get('id'); 
    this.alunoService.delete(id).subscribe(() => {
      this.alunoService.showMessage('Aluno Excluído.');
      this.router.navigate(['/aluno-read']);
    })
  }

}
