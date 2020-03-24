import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MyToastService } from '../../service/my-toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast-display',
  templateUrl: './toast-display.component.html',
  styleUrls: ['./toast-display.component.css'],
  providers: [MessageService],
})
export class ToastDisplayComponent implements OnInit {

  subscription: Subscription;
  constructor(
    private messageService: MessageService,
    private mytoastService: MyToastService
  ) {
    this.subscription = mytoastService.message$.subscribe(t => messageService.add(t));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
  }

  clear() {
    this.messageService.clear();
  }

}
