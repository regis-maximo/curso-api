import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlBase: string = 'http://localhost:8080/curso/alunos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient, 
    private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
      this.snackBar.open(
        msg,
        '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        }
      );
  }

  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.urlBase, JSON.stringify(aluno), this.httpOptions);
  }

  read(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.urlBase);
  }

  readId(id: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.urlBase}/${id}`);
  }

  delete(id: string): Observable<Aluno> {
    return this.http.delete<Aluno>(`${this.urlBase}/${id}`);
  }
}
