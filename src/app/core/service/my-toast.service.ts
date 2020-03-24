import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyToastService {

  toasts: any[] = [];
  message$: Observable<any>;

  private msgsSubject: Subject<any>;
  private _massage: any;

  constructor() {
    this.msgsSubject = new Subject<any>();
    this.message$ = this.msgsSubject.asObservable();
  }

  add(message: any) {
    this.msgsSubject.next(message);
  }

  addSuccess(summary: string, detail: string) {
    let msgs = { severity: 'success', summary: summary, detail: detail, life: 5000 };
    this.msgsSubject.next(msgs);
  }

  addWarning(summary: string, detail: string) {
    let msgs = { severity: 'warn', summary: summary, detail: detail, life: 5000 };
    this.msgsSubject.next(msgs);
  }

  addError(summary: string, detail: string) {
    let msgs = { severity: 'error', summary: summary, detail: detail, life: 5000 };
    this.msgsSubject.next(msgs);
  }

  addInfo(summary: string, detail: string) {
    let msgs = { severity: 'info', summary: summary, detail: detail, life: 5000 };
    this.msgsSubject.next(msgs);
  }

}
