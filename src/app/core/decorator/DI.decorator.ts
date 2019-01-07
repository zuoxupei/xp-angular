const InsFactory=[];
export const InjectIns = convertInjectInsToFactory();

export function convertInjectInsToFactory(){
    return function(target:any){
        InsFactory.push(new target())
    };
}

export function Autowired(type:Function){
    return function (target: any, propertyName: string) {
        let ins = InsFactory.find((ins)=>ins instanceof type);
        if(ins){
            target[propertyName] = ins;
        }else{
            console.log(`请注入${type}`)
        }
    }
}