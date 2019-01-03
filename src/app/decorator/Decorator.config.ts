export function Aop() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log(`为${propertyKey}添加动态监听`,Object.prototype.toString.call(1))
        // for(var k =1;k<=5;k++){
        //     (function(j){
        //         setTimeout(()=>{
        //             console.log(j)
        //         },1000);
        //     })(k)
        // }
        // let method = target[propertyKey].bind(target);
        // Reflect.set(target, propertyKey, function () {
        //     console.log(`${propertyKey}开始执行`)
        //     method();
        //     console.log(`${propertyKey}执行结束`)
        // });
        // console.log(Reflect.get(target, "onClick1"));
        // const floatMap = (arr) =>Array.isArray(arr) ? arr.reduce((a,b)=>[...a,...floatMap(b)],[]) : [arr];
        // Object.defineProperty(this,Symbol.iterator,{
        //     configurable:true,
        //     enumerable:false,
        //     writable:false,
        //     value:function (){
        //         const obj = this;
        //         const keys = Object.keys(obj);
        //         let index = 0;
        //         return {
        //             next:function(){
        //                 return {
        //                     value:obj[keys[index++]],
        //                     done:(index > keys.length)
        //                 }
        //             }
        //         }
        //     }
        // })
    };
}