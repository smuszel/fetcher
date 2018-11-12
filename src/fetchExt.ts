import { matchUriTemplate } from "matchUriTemplate";

const stringBase = 'accept;contentType;requestMetod;uriTemplate';

const someParser = (mappings, str) => {
    const rs = mappings.map(m => `(${m})?`).join(';');
    return str.match(new RegExp(rs)).splice(1, mappings.length)
}

export const fetchExt = (config: FetcherConfig) => planStr => uriParams => async (payload?) => {
    const groupMappings = ['j|b', 'j|b', 'g|c' , '[\\s\\S]+'];
    const [
        acceptType,
        contentType,
        requestMethod,
        uriTemplate,
    ] = someParser(groupMappings, planStr);

    const body = payload && await config.serializers[contentType](payload);
    const method = config.requestMethods[requestMethod];
    const url = config.uriBase + matchUriTemplate(uriTemplate, uriParams);

    const headers = {
        'Content-Type': config.contentTypes[contentType],
        'Accept': config.acceptTypes[acceptType]
    };

    const init = {
        headers,
        method,
        body
    };

    const response = await fetch(url, init);
    const checkedResponse = await config.responseActions[response.status](response)
    const result = checkedResponse && await config.deserializers[acceptType](response);
    
    return result;
}