import { Component, OnInit, Input } from '@angular/core';
import { ToastConfig, ToastType } from '../ifw-toast-model';
import { IfwToastService } from '../ifw-toast.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ifw-toast-box',
  templateUrl: './ifw-toast-box.component.html',
  styleUrls: ['./ifw-toast-box.component.scss'],
  animations: [
    trigger('animation', [
      state('none', style({})),
      state('fancy', style([
        { transform: 'translateX(0)' }, { transform: 'translateY(0)' }, { opacity: 1 }, { maxHeight: 300 }
      ])),
      transition('void => fancy', [
        style({ opacity: 0, maxHeight: 0, transform: 'translateY(-100%)' }),
        animate('300ms ease-in-out')
      ]),
      transition('fancy => void', [
        animate('300ms ease-in-out', style({ transform: 'translateX(100%)', height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class IfwToastBoxComponent implements OnInit {

  @Input() toastAnimation: string = "none";
  @Input() boxPosition: string = "ifw-top-center";

  private _toastConfigs: Array<ToastConfig> = [];
  private _toastNoRepeat: Array<string> = [];

  constructor(private ifwToast: IfwToastService) {
    this.ifwToast.$toastSubject.subscribe((config: ToastConfig) => {
      if(config.toastType === ToastType.LOADING_OVER){
        let i = this._toastConfigs.findIndex(x=>{
          return x.toastType === ToastType.LOADING;
        })
        this._toastConfigs.splice(i, 1);
        return;
      }
      if(!this._distin(config)){
        if(config.toastType === ToastType.NO_REPEAT){
          if(!this._checkRepeat(config)){
            this._toastConfigs.unshift(config);
          }
        }else{
          this._toastConfigs.unshift(config);
        }
      }
    })
  }

  ngOnInit() {
  }

  public toastConfigs() {
    return this._toastConfigs;
  }

  /**
   * 去重 或者不再提示
   */
  private _distin(config: ToastConfig): boolean {
    return this._toastConfigs.some((tc:ToastConfig)=>{
      return tc.notice === config.notice && tc.toastType === config.toastType;
    });
  }

  private _checkRepeat(config: ToastConfig):boolean {
    return this._toastNoRepeat.some((no:string)=>{
      return no === config.notice;
    })
  }

  /**
   * 移除
   * @param config 
   */
  public remove(config: ToastConfig) {
    if (this._toastConfigs.indexOf(config) >= 0) {
      this._toastConfigs.splice(this._toastConfigs.indexOf(config), 1);
    }
  }

  /**
   * 不在提示
   * @param config 
   */
  public noRepeatInf(config: ToastConfig) {
    this._toastNoRepeat.push(config.notice);
  }

}
