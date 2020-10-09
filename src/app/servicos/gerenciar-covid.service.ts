import { Estado } from './../modelo/api.models';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GerenciarCovidService {

  public URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

  constructor(private http: HttpClient) { }

  public listarEstados(): Observable<Estado> {
      return this.http.get<Estado>(this.URL);
  }
}
