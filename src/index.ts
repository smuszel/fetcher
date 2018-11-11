import { fetchWrapper } from "wrapper";

export const initialize = (config: FetcherConfig) => {
    const wrapper = fetchWrapper(config.responseActions);

    const fetcher = (template, params, payload?) => {
        const plan = planFactory(template, params);
        const result = wrapper(plan)(payload);

        return result
    }

    return fetcher;
}

const planFactory = (template, params) => {

}

const getAuth = async () => {
    // Token providing logic
    let token;

    return { 'Authorization': `Bearer ${token}` };
}