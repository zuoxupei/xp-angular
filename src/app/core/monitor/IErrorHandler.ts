import { ErrorHandler } from "@angular/core";

export class IErrorHandler implements ErrorHandler{

    handleError(error: any): void {
        console.error("代码错误监控",error)
    }

}