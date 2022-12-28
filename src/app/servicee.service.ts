import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userr } from './userr';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {

  private Userlisturl: string;
  private Usersposturl: string;

  // putt
  private Userputurl: string;

  constructor(private http: HttpClient) { 
   this.Userlisturl = 'http://localhost:1542/getuserdata';
   this.Usersposturl = 'http://localhost:1542/getmoviesdata';

   
  //  putt
   this.Userputurl = 'http://localhost:1542/updateUserdata';
 
  }

  findAll(): Observable<Userr[]>{
    return this.http.get<Userr[]>(this.Userlisturl);
  }

  save(user1:Userr){
    console.log(user1.name+" "+user1.password);
    return this.http.post<Userr>(this.Usersposturl, user1);
  }
}
