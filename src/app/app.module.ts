import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IfwToastModule } from './core/lib/ifw-toast/ifw-toast.module';
import { MultiEventPlugin } from './core/plugins/MultiEventPlugin';
import { IErrorHandler } from './core/monitor/IErrorHandler';
import { AppRouteModule } from './route/app-route.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DirectiveModuleModule } from './core/directive/directive-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,IfwToastModule,BrowserAnimationsModule,AppRouteModule,DirectiveModuleModule
  ],
  providers: [{ provide: EVENT_MANAGER_PLUGINS, useClass: MultiEventPlugin, multi: true },
              { provide:ErrorHandler,useClass:IErrorHandler},{provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
