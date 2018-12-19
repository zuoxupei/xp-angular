import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastConfig } from './ifw-toast-model';

@Injectable({
  providedIn: 'root'
})
export class IfwToastService {

  private toastSubject = new Subject<ToastConfig>();
  public $toastSubject = this.toastSubject.asObservable();
  
  constructor() { }

  public toast(toastConfig: ToastConfig) {
    this.toastSubject.next(toastConfig);
  }
}
