import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Permission} from "../models/permission";

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

  @Input() permissions:Array<Permission>;
  @Output() SelectPermission = new EventEmitter();
  @Output() SelectAllPermissions = new EventEmitter();

  selectedPermission:Permission;

  constructor() {
  }

  ngOnInit() {

  }

  onPermissionSelect(permission:Permission) {
    this.selectedPermission = permission;
    this.SelectPermission.emit(permission)
  }

  onAllPermissionsSelect() {
    this.selectedPermission = null;
    this.SelectAllPermissions.emit();
  }

}
