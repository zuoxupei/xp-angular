import { InjectIns } from "src/app/core/decorator/DI.decorator";


@InjectIns
export class Person{
    public name:string = "zxp";
    public age : number;

    public openTheDoor(){
        console.log(`${this.name}open l door`)
    }
}