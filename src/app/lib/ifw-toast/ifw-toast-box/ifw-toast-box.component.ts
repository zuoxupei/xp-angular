import { Component, OnInit, Input } from '@angular/core';
import { ToastConfig } from '../ifw-toast-model';
import { IfwToastService } from '../ifw-toast.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ifw-toast-box',
  templateUrl: './ifw-toast-box.component.html',
  styleUrls: ['./ifw-toast-box.component.scss'],
  animations:[
    trigger('animation',[
        state('none',style({})),
        state('fancy',style([
            {transform:'translateX(0)'},{transform:'translateY(0)'},{opacity:1},{maxHeight:300}
        ])),
        transition('void => fancy',[
            style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
            animate('300ms ease-in-out')
        ]),
        transition('fancy => void', [
            animate('300ms ease-in-out', style({transform: 'translateX(100%)', height: 0, opacity: 0}))
        ])
    ])
]
})
export class IfwToastBoxComponent implements OnInit {

  @Input() toastAnimation:string ="none";
  @Input() boxPosition:string = "ifw-top-center";

  private _toastConfigs: Array<ToastConfig> = [];

  constructor(private ifwToast:IfwToastService) { 
    this.ifwToast.$toastSubject.subscribe((config:ToastConfig)=>{
      this._toastConfigs.unshift(config);
    })
  }

  ngOnInit() {
  }

  public toastConfigs(){
    return this._toastConfigs;
  }

  /**
   * 移除
   * @param config 
   */
  public remove(config:ToastConfig){
    if(this._toastConfigs.indexOf(config) >= 0){
      this._toastConfigs.splice(this._toastConfigs.indexOf(config),1);
    }
  }

}
