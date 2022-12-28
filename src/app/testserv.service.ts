import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userr } from './userr';

@Injectable({
  providedIn: 'root'
})
export class TestservService {

  constructor(private http:HttpClient) { }

  getallusers():Observable<Userr[]>{
    return this.http.get<Userr[]>('http://localhost:1542/getmoviesdata');
  }
 
  // putt 
  putusers():Observable<Userr[]>{
    return this.http.put<Userr[]>('http://localhost:1542/updateUserdata');
  }
}
