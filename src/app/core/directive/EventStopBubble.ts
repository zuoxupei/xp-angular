import { Directive, Output, EventEmitter, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[click.esb]'
})
export class EventStopBubble {
    @Output("click.esb") eventStopBubble = new EventEmitter();
    unsubscribe: () => void;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef
    ) {
    }

    ngOnInit(): void {
        this.unsubscribe = this.renderer.listen(
            this.element.nativeElement,'click',event=>{
                event.stopPropagation();
                this.eventStopBubble.emit(event);
            }
        )
    }

    ngOnDestroy(): void {
       this.unsubscribe();
    }
}