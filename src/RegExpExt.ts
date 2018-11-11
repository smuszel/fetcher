export class RegExpExt extends RegExp {

    hydrate(obj, keys) {
        return (_, ...args) => {
            keys.forEach((k, ix) => {
                obj[k] = args[ix];
            })
    
            return obj;
        }
    }

    parse(str, keys: string[]) {
        let result = {} as {[key: string]: any};
        str.replace(this, this.hydrate(result, keys));

        return result;
    }
}