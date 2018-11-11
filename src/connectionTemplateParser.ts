import { RegExpExt } from "RegExpExt";

export const connectionTemplateParser = (deserializers, requestMethods) => {
    const contentTypeOptions = Object.keys(deserializers).join('|');
    const methodOptions = Object.keys(requestMethods).join('|');
    const reg = new RegExpExt(`(${contentTypeOptions})?;(${methodOptions})?@([\\s\\S]+)`);
    const keys = ['deserialize', 'requestMethod', 'uriTemplate'];

    return str => reg.parse(str, keys);
}

