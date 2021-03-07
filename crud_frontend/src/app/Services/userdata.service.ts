import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) { }

  private baseURL="http://localhost:8080/api/users"

  getuserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }

  getUserbyId(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`)
  }

  deleteUserbyId(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
