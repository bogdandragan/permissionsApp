import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as c3 from 'c3';
import {UsersService} from "../users.service";
import {User} from "../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User;

  constructor(private route:ActivatedRoute,
              private location:Location,
              private usersService:UsersService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(parseInt(id)).subscribe(
        data => {
        console.log('user', data);
        this.user = data;

        let chart = c3.generate({
          bindto: '#chart',
          data: {
            json: this.user.logins,
            keys: {
              x: 'date', // it's possible to specify 'x' when category axis
              value: ['visits']
            },
            type: 'bar'
          },
          axis: {
            x: {
              type: 'timeseries',
              tick: {
                format: '%Y-%m-%d',
                rotate: 75,
              }
            },
          },
          bar: {
            width: 100 // this makes bar width 100px
          }
        });
      },
        err => {
        console.log(err);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
