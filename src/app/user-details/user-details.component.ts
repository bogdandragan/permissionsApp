import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user : Object = {};

  constructor(private route: ActivatedRoute,
              private location: Location,
              private usersService: UsersService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(parseInt(id)).subscribe(
        data =>{
          console.log('user',data);
          this.user = data;
        },
        err =>{
          console.log(err);
        }
    );
  }

  goBack(){
    this.location.back();
  }

}
