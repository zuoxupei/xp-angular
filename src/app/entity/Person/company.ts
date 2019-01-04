import { InjectIns } from "src/app/decorator/DI.decorator";

@InjectIns
export class Company{
    public c_name = "ifw";

    public findJob(){
        console.log(`${this.c_name}2019`)
    }
}