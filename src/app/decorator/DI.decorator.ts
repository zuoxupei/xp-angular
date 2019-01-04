import { Person } from './../entity/Person/person';
import { Company } from './../entity/Person/company';
const InsFactory=[];
export const InjectIns = convertInjectInsToFactory();

export function convertInjectInsToFactory(){
    return function(target:Function){
       let obj = {};
       obj=Object.setPrototypeOf(obj,target.prototype);
       let c = target.call(obj);
       console.log(c);
    };
}

export function Autowired(type:Function){
    return function (target: any, propertyName: string) {
        console.log("自动注入")
        let insIndex = InsFactory.findIndex((ins)=>ins instanceof type);
        console.log(InsFactory,insIndex)
        if(insIndex > 0){
            target[propertyName] = InsFactory[insIndex];
            console.log(target[propertyName])
        }
    }
}