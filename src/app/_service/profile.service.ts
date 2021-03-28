import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  api: string = environment.api;

  constructor(private http: HttpClient) { }

  getProfile(userValue: string):Observable<any>{
    return this.http.get(this.api+'/users/'+userValue)
  };
}
