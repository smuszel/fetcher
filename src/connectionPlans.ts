import { get, post } from './constants';

const qArray = key => xs => xs.map(x => `&${key}=${x}`).join('');

export const connectionPlans = {
    exampleController: {
        endpoint1: id => ({
            uri: `customer/${id}`,
            requestMethod: get,
            extractionStep: r => ({ customers: r })
        }),
        endpoint2: ids => ({
            uri: `customer/${qArray('id')(ids)}`,
            requestMethod: get,
        }),
        endpoint3: {
            uri: 'customer/',
            requestMethod: get,
        },
        endpoint4: (payload: FormData) => ({
            uri: 'customer/',
            requestMethod: post,
            payload,
        }),
    }
}
