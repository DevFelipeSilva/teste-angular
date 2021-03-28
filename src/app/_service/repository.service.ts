import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  api: string = environment.api;

  constructor(private http: HttpClient) { }

  getRepositories(userValue: string):Observable<any>{
    return this.http.get(this.api+'/users/'+userValue+'/repos');
  }

  getRepository(userName: string, repositoryName: string): Observable<any>{
    return this.http.get(environment.api+"/repos/"+userName+"/"+repositoryName);
  }
}