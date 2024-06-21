import { Ref, ref } from "vue";

//We are using "currying" because we cannot have one specified type <T> and one infered one <O> in the same function
//https://stackoverflow.com/a/55754981
export function exposeNativeAttribute<T>(){
    const func = function <O>(obj: Ref<O>, attr: keyof O) {
        const val = ref<T | null>(null)
        const proxyValHandler = {
            get(target: typeof val, prop: string) {
                if (prop === "value") {
                    (val.value as unknown) = (obj.value[attr] as unknown)
                }
                return Reflect.get(target, prop);
            },
            set(target: typeof val, prop: string, value: T) {
                if (prop === "value") {
                    (obj.value[attr] as unknown) = value
                }
                return Reflect.set(target, prop, value);
            }
        }
        const proxyVal = new Proxy(val, proxyValHandler)
        return proxyVal
    }
    return func
}