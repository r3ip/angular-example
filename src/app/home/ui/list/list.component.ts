import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../service/index';
import { UserModel } from './../../model/index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: UserModel[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.listUsers()
  }

  listUsers(){
    this.userService.getAll().subscribe(
      res=> {
        this.user =  res;
      }
    )
  }

}
