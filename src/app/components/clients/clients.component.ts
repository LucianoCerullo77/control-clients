import { Component } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients: Client[];

  constructor(private clientsService: ClientService) {}

  ngOnInit() {
    this.clientsService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  getTotalBalance(){
    let totalBalance: number = 0;
    if(this.clients) {
      this.clients.forEach(client => {
        totalBalance += Number(client?.balance)
      })
    }
    return totalBalance
  }
}
