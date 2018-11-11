import { fetchWrapper } from "wrapper";
import { connectionTemplateParser } from "connectionTemplateParser";

export const initialize = (config: FetcherConfig) => {
    const fetchExt = fetchWrapper(config.responseActions);
    const parse = connectionTemplateParser(config.deserializers, config.requestMethods)

    const fetcher = (template, params, payload?) => {
        const { uriTemplate, ...rawPlan } = parse(template);
        const uri = matchUriTemplate(uriTemplate, params);
        const auth = { 'Authorization': `Bearer ${rawPlan.jwt}` };

        const plan = {
            uri,
            auth,
            ...rawPlan
        }

        const result = fetchExt(plan)(payload);

        return result
    }

    return fetcher;
}

const matchUriTemplate = (a, b) => ''

// const planFactory = (template, params) => {
//     const 
// }