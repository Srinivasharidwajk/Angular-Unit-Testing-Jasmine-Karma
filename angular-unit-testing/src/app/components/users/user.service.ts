import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IUser} from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getAllUsers():Observable<IUser[]>{
    let dataURL:string = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<IUser[]>(dataURL).pipe(
      retry(1)
    )
  }

}
