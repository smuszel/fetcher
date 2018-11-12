import { matchUriTemplate } from "./matchUriTemplate";

const someParser = (mappings, str) => {
    const rs = mappings.map(m => `(${m})?`).join(';');
    const results = str.match(new RegExp(rs)).splice(1, mappings.length);
    return results;
}

export const fetchExt = (config: FetcherConfig) => planStr => uriParams => async (payload?) => {
    const acceptGroup = Object.keys(config.acceptTypes).join('|');
    const contentTypeGroup = Object.keys(config.contentTypes).join('|');
    const requestMethodGroup = Object.keys(config.requestMethods).join('|');
    const uriTemplateGroup = '[\\s\\S]+';
    const groupMappings = [acceptGroup, contentTypeGroup, requestMethodGroup, uriTemplateGroup];
    const [
        acceptType,
        contentType,
        requestMethod,
        uriTemplate,
    ] = someParser(groupMappings, planStr);

    const serializer = config.contentTypes[contentType][0];
    const ct = config.contentTypes[contentType][1]
    const method = config.requestMethods[requestMethod];
    const deserializer = config.acceptTypes[acceptType][0];
    const accept = config.acceptTypes[acceptType][1];
    const checker = response => config.responseActions[response.status];

    const body = payload && await serializer(payload);
    const url = config.uriBase + matchUriTemplate(uriTemplate, uriParams);

    const headers = {
        'Content-Type': ct,
        accept
    };

    const init = {
        headers,
        method,
        body
    };

    const response = await fetch(url, init);
    const checkedResponse = await checker(response)
    const result = checkedResponse && await deserializer(response);
    
    return result;
}