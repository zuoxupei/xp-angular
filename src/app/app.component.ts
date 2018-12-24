import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Xp from 'tsxp/dist/indexX';
import XpTest from 'tsxp/dist/indexP';
import Vector3D from 'tsxp/dist/xpT';
import Kmp from 'ty-algorithm/dist/ty_kmp';
import { IfwToastService } from './lib/ifw-toast/ifw-toast.service';
import { ToastConfig, ToastType } from './lib/ifw-toast/ifw-toast-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  
  title = 'app';
  public t :number =2;
  public c:number =1;

  constructor(private ifwToast:IfwToastService){

  }

  ngOnInit(): void {
    // let x= new Xp(1,23,3);
    // this.c = x.reduceXP();
    // let f = new XpTest(1,2);
    // this.t = f.addXP();
    // let v=new Vector3D(1,2,11111113);
    // this.c= v.z;
    let b = new Kmp(1,22);
    this.t= b.kmpReduce();
  }

  onClick(){
    this.ifwToast.toast(new ToastConfig(ToastType.SUCCESS,"方案保存成功",3000,false))
    this.ifwToast.toast(new ToastConfig(ToastType.INFO,"方案保存成功",3000,false))
    this.ifwToast.toast(new ToastConfig(ToastType.WARNING,"方案保存成功",3000,false))
    this.ifwToast.toast(new ToastConfig(ToastType.ERROR,"方案保存成功",3000,false))
    this.ifwToast.toast(new ToastConfig(ToastType.NO_REPEAT,"方案保存成功不再提示",3000,false))
    this.ifwToast.toast(new ToastConfig(ToastType.LOADING,"方案加载中",3000,false))
  }

  onClick1(){
    console.log('111111111111')
    this.title = "测试"+new Date().getSeconds()+"zxp";
  }

  ngOnChanges(){
    console.log('111111111111')
  }

}

