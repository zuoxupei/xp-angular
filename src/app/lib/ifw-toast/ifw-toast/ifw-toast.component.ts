import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastConfig, ToastType } from '../ifw-toast-model';

@Component({
  selector: 'ifw-toast',
  templateUrl: './ifw-toast.component.html',
  styleUrls: ['./ifw-toast.component.scss']
})
export class IfwToastComponent implements OnInit {

  @Input() config = new ToastConfig(ToastType.INFO,"");
  @Output() dismissed = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.config.isAutoDismissing){
      setTimeout(()=>{
        this.dismiss();
      },this.config.autoDismissTime);
    }
  }

  public dismiss(){
    this.dismissed.emit()
  }
}
