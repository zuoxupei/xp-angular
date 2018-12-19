import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MultiEventPlugin } from './plugins/MultiEventPlugin';
import { IfwToastModule } from './lib/ifw-toast/ifw-toast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,IfwToastModule,BrowserAnimationsModule
  ],
  providers: [{ provide: EVENT_MANAGER_PLUGINS, useClass: MultiEventPlugin, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
