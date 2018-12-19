/**
 * toast消息枚举
 *
 * @export
 * @enum {number}
 */
export enum ToastType {
    SUCCESS, INFO, WARNING, ERROR, NO_REPEAT, LOADING
}

export class ToastConfig {

    private _toastType: ToastType;
    private _notice: string;
    private _autoDismissTime: number;
    private _dismissable: boolean;

    /**
     * Creates an instance of ToastConfig.
     * @param {ToastType} toastType
     * @param {string} notice
     * @param {number} [autoDismissTime=0]
     * @param {boolean} [dismissable=true]
     * @memberof ToastConfig
     */
    constructor(toastType: ToastType, notice: string, autoDismissTime = 3000, dismissable = true) {
        this._toastType = toastType;
        this._notice = notice;
        this._autoDismissTime = autoDismissTime;
        this._dismissable = dismissable;
    }

    get toastType() {
        return this._toastType;
    }

    get notice() {
        return this._notice;
    }

    get autoDismissTime() {
        return this._autoDismissTime;
    }

    get dismissable() {
        return this._dismissable;
    }

    isDismissable() {
        return this._autoDismissTime === 0 || this.dismissable;
    }

    isAutoDismissing() {
        return this._autoDismissTime > 0;
    }
}


