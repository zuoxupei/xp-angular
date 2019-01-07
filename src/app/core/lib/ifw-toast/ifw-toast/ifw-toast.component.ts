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
  @Output() noRepeatInf = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // if(this.config.isAutoDismissing()){
    //   setTimeout(()=>{
    //     this.dismiss();
    //   },this.config.autoDismissTime);
    // }
  }

  public dismiss(){
    this.dismissed.emit()
  }

  public isSuccess(){
    return this.config.toastType === ToastType.SUCCESS;
  }

  public isWarning(){
    return this.config.toastType === ToastType.WARNING;
  }

  public isInfo(){
    return this.config.toastType === ToastType.INFO;
  }

  public isNoRepeat(){
    return this.config.toastType === ToastType.NO_REPEAT;
  }

  public isError(){
    return this.config.toastType === ToastType.ERROR;
  }

  public isloading(){
    return this.config.toastType === ToastType.LOADING;
  }

  /**
   * 不在提示
   */
  public noRepeat(){
    this.dismissed.emit()
    this.noRepeatInf.emit();
  }
}
