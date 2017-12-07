import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Permission} from "../models/permission";

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

    @Input() permissions: Array<Permission>;
    @Output() SelectPermission = new EventEmitter();
    @Output() SelectAllPermissions = new EventEmitter();

    constructor() { }

    ngOnInit() {

    }

    onPermissionSelect(permission: Permission){
        this.SelectPermission.emit(permission)
    }

    onAllPermissionsSelect(){
        this.SelectAllPermissions.emit();
    }

}
