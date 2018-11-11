export const fetchWrapper = responseActions => plan => async (payload?) => {
    const init = {
        headers: {
            'Content-Type': plan.contentType,
            ...plan.auth
        },
        method: plan.requestMethod,
        body: payload && plan.transformPayloadToBody(payload)
    };

    const response = await fetch(plan.url, init);
    const checkedResponse = await responseActions[response.status]
    const result = await checkedResponse && plan.deserialize(response);
    
    return result;
}