export const fetchWrapper = responseActions => plan => async (payload?) => {
    const body = payload && await plan.transformPayloadToBody(payload);
    const init = {
        headers: {
            'Content-Type': plan.contentType,
            ...plan.auth
        },
        method: plan.requestMethod,
        body
    };

    const response = await fetch(plan.url, init);
    const checkedResponse = await responseActions[response.status]
    const result = await checkedResponse && plan.deserialize(response);
    
    return result;
}