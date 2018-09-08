const getApiURL = () => {
    return 'some url';
}

const getAuth = async () => {
    // Token providing logic
    let token;

    return { 'Authorization': `Bearer ${token}` };
}

const ensureExtractionStep = (plan: ConnectionPlan) => {
    const extract = plan.extractionStep;
    
    if (!extract) {
        return x => x;
    } else {
        return x => x && extract(x);
    }
}

export const fetcher = async (plan: ConnectionPlan) => {
    if (plan.stub) {
        return plan.stub;
    }

    const extractionStep = ensureExtractionStep(plan);
    const auth = await getAuth();
    const uri = getApiURL() + plan.uri;

    const config = {
        headers: {
            ...plan.contentType,
            ...auth
        },
        ...plan.requestMethod,
        body: plan.payload
    };

    console.log(`[HTTP] fetching ${uri}`);

    const response = await fetch(uri, config)
        .then(r => r.json())
        .catch(console.error)
        ;
    
    const result = extractionStep(response);
    
    return result;
}