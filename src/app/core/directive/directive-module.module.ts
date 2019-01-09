import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventStopBubble } from './EventStopBubble';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventStopBubble],
  exports:[EventStopBubble]
})
export class DirectiveModuleModule { }
