import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfwToastBoxComponent } from './ifw-toast-box/ifw-toast-box.component';
import { IfwToastComponent } from './ifw-toast/ifw-toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IfwToastBoxComponent, IfwToastComponent],
  exports:[IfwToastBoxComponent,IfwToastComponent]
})
export class IfwToastModule { }
