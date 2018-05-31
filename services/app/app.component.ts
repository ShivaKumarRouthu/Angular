import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UsersService,
    CountService
  ]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  count: number = 0;

  constructor(
    private usersService: UsersService,
    private countService: CountService
  ){}

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.count = this.countService.counter;
  }

}
