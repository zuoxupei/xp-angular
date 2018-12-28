export function Aop() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`为${propertyKey}添加动态监听`)
        let method = target[propertyKey].bind(target);
        Reflect.set(target, propertyKey, function () {
            console.log(`${propertyKey}开始执行`)
            method();
            console.log(`${propertyKey}执行结束`)
        });
        console.log(Reflect.get(target, "onClick1"));
    };
}