import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit, AfterViewInit {

  isLoading: boolean = true;
  aluno: Aluno[];

  dataSource: MatTableDataSource<Aluno>;
  displayedColumns: string[] = ['id', 'name', 'curso', 'ação'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private alunoService: AlunoService) {
      this.alunoService.read().subscribe(aluno => {
        this.dataSource = new MatTableDataSource(aluno)
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      })
    }

    ngOnInit(): void {
      this.dataSource.paginator = this.paginator;  
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

   }
  
 