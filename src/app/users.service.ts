import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {PermissionsUser} from "./models/permissionsUser";
import {User} from "./models/user";

@Injectable()
export class UsersService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<PermissionsUser[]>{
    return this.http.get<PermissionsUser[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User>{
    const url = this.usersUrl+'/'+id;

    return this.http.get<User>(url);
  }


}
