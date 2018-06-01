import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private serversService: ServersService) {}
  servers = [];
  appName: any = '';

  ngOnInit() {
    this.serversService.getServers()
    .subscribe(
    (data: any[]) =>this.servers = data,
    (error: Error) => console.log('error'));
    this.appName = this.serversService.getAppName();
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serversService.saveServers(this.servers)
    .subscribe((response) => {
      console.log(response);
    })
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  

}
