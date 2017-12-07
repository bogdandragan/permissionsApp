import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Permission} from "./models/permission";

@Injectable()
export class PermissionsService {

  private permissionsUrl = 'api/permissions';

  constructor(private http: HttpClient) { }

  getPermissions(): Observable<Permission[]>{
    return this.http.get<Permission[]>(this.permissionsUrl);
  }
}
