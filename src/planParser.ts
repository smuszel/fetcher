import { deserializers } from "deserializers";
import { requestMethods } from "requestMehods";

const contentTypeOptions = Object.keys(deserializers).join('|');
const methodOptions = Object.keys(requestMethods).join('|');

const hydrateEndpoint: any = endpoint => (_, ct, m, prop, template) => {
    endpoint.deserialize = deserializers[ct || 'j']
    endpoint.requestMethod = requestMethods[m || 'g'];
    endpoint.extractionProp = prop;
    endpoint.template = template;
};

export const parsePlan = (str: string) => {
    let endpoint = {} as any;
    const reg = new RegExp(`(${contentTypeOptions})?;(${methodOptions})?;(\\w+)@([\\s\\S]+)`);
    str.replace(reg, hydrateEndpoint(endpoint));

    return endpoint
}