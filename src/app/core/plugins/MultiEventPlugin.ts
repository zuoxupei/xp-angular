import { Injectable, Inject } from "@angular/core";
import { DOCUMENT, EventManager, ɵangular_packages_platform_browser_platform_browser_g as EventManagerPlugin} from "@angular/platform-browser";

@Injectable()
export class MultiEventPlugin extends EventManagerPlugin {

    manager: EventManager;

    constructor(@Inject(DOCUMENT) doc: any) { super(doc); }

    supports(eventName: string): boolean {
        return this._getMultiArray(eventName) ? true : false;
    }

    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
        let zone = this.manager.getZone();
        let events = this._getMultiArray(eventName);
        let outsideHandler = (event: any) => {
            zone.runGuarded(() => this._forkHandler(handler(event)));
        };
        return this.manager.getZone().runOutsideAngular(() => this.manager.addEventListener(element, events, outsideHandler));
    }

    addGlobalEventListener(target: string, eventName: string,handler: Function): Function {
        let zone = this.manager.getZone();
        let events = this._getMultiArray(eventName);
        let outsideHandler = (event: any) => zone.runGuarded(() => this._forkHandler(handler(event)));
        return this.manager.getZone().runOutsideAngular(() => this.manager.addGlobalEventListener(target, events,outsideHandler));
    }

    //xp-click
    private _getMultiArray(eventName: string): string {
        let muArray = eventName.split("-");
        if (muArray.length !== 2) return undefined;
        return muArray[0] === 'xp' ? muArray[1] : undefined;
    }

    private _forkHandler(fn:Function):Function{
        console.log("埋点策略",fn);
        return fn;
    }
}