import { matchUriTemplate } from "./matchUriTemplate";

const anyMatch = '[\\s\\S]+';

const createParser = (config: BaseConfig) => {
    const configKeys = Object.keys(config);
    const configValues = Object.values(config)
    const optionGroups = configValues.map(c => Object.keys(c).join('|'));
    const allGroups = [...optionGroups, anyMatch];
    const pattern = allGroups.map(g => `(${g})`).join(';');

    const parser = str => {
        const configBase = {} as any
        const matches = str.match(new RegExp(pattern)).slice(1);
        matches.forEach((m, ix) => {
            configBase[configKeys[ix]] = m || configValues[0];
        });

        return [configBase, matches[matches.length - 1]];
    }

    return parser;
}

export const fetchExt = baseConfig => {
    const parser = createParser(baseConfig);

    return f(parser)
}

const f = parser => uriBase => responseActions => planStr => uriParams => {
    const checker = response => responseActions[response.status];
    const [configBase, uriTemplate] = parser(planStr);
    const url = uriBase + matchUriTemplate(uriTemplate, uriParams);

    const config = {
        ...configBase,
        url,
        checker
    };

    return h(config)
}
 

const h = config => async (payload?) => {
    const { deserializer, serializer, method, accept, contentType, url, checker } = config;
    const body = payload && await serializer(payload);

    const headers = {
        'Content-Type': contentType,
        accept
    };

    const init = {
        headers,
        method,
        body
    };

    const response = await fetch(url, init);
    const checkedResponse = await checker(response);
    const result = checkedResponse && await deserializer(response);
    
    return result;
}