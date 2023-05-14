import { Component, ViewChild } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients: Client[];
  client: Client = {
    name: '',
    lastname: '',
    email: '',
    balance: 0,
  };

  @ViewChild('formClient', { static: false }) formClient: NgForm;
  @ViewChild('closeModal', { static: false }) closeModalButton: Element;

  constructor(
    private clientsService: ClientService,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.clientsService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  getTotalBalance() {
    let totalBalance: number = 0;
    if (this.clients) {
      this.clients.forEach((client) => {
        totalBalance += Number(client?.balance);
      });
    }
    return totalBalance;
  }

  addFormClient(formClient: NgForm) {
    if (!formClient.valid) {
      this.flashMessages.show('Please complete the form', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      this.clientsService.addClient(formClient.value);
      this.formClient.resetForm();
      this.closeModal();
    }
  }

  private closeModal() {
    this.closeModalButton;
  }
}
