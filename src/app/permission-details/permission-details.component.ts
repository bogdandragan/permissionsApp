import { Component, OnInit, Input } from '@angular/core';
import {Permission} from "../models/permission";

@Component({
  selector: 'app-permission-details',
  templateUrl: './permission-details.component.html',
  styleUrls: ['./permission-details.component.css']
})
export class PermissionDetailsComponent implements OnInit {
  @Input() users: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
