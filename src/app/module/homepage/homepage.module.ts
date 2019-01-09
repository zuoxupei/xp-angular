import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { homepageRoute } from './homepage.route';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homepageRoute)
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
