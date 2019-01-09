import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule}  from '@angular/router';
import { appRoute } from './app-route';

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoute)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouteModule { }
