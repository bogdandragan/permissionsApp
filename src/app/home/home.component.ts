import { Component, OnInit } from '@angular/core';
import {Permission} from "../models/permission";
import {PermissionsService} from "../permissions.service";
import {UsersService} from "../users.service";
import {PermissionsUser} from "../models/permissionsUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  permissions : Array<Permission>;
  permissionUsers: Array<PermissionsUser>;
  allPermissionsUsers: Array<PermissionsUser>;

  constructor(private permissionsService: PermissionsService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.getAllPermissions();
    this.usersService.getUsers().subscribe(
        data => {
            this.allPermissionsUsers = data;
            this.permissionUsers = this.allPermissionsUsers;
        },
        err => {
          console.log(err);
        }
    );
  }

  getAllPermissions(){
    this.permissionsService.getPermissions().subscribe(
        data => {
          this.permissions = data;
        },
        err => {
          console.log(err);
        }
    );
  }

  onSelectPermission(permission: Permission){
    this.permissionUsers = permission.users;
  }

  onSelectAllPermissions(){
      this.permissionUsers = this.allPermissionsUsers;
  }

}
