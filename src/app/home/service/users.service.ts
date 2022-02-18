import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { UserModel } from './../model/index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserModel[]>{
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(
      map((data: any)=>{
        let user = Array<UserModel>();
        let obj;
        for(const x of data.results){
          obj = new UserModel();
          obj.copiar(x)
          user.push(obj);
        }
        return user;
      })
    );
  }
}
