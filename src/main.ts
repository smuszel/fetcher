import { outerFetcher } from "./fetchExt";

const defaultBase = {
    requestMethod: {
        g: 'GET',
        c: 'POST',
        u: 'PUT',
        d: 'DELETE',
        m: 'PATCH'
    }, 
    accept: {
        j: 'application/json'
    }, 
    contentType: {
        j: 'application/json'
    },
    deserializer: {
        j: r => r.json()
    }, 
    serializer: {
        j: obj => JSON.stringify(obj)
    }
}

const uriBase = 'abc'

const responseActions = {
    200: r => r
}

const getExtractProp = 'c;;;;;abc/:id';

const params = { id: 1 };
// const getExtractProp = ';@entity/:id';
// const createEntityWithJson = 'j;c@abc/entity';
// const downloadBlobWithQuery = 'b;@downloads/:entityType/:id';

// const f1 = outerFetcher(defaultBase)(uriBase)(responsActions)(getExtractProp)(2);
const f1 = outerFetcher(defaultBase);
const f2 = f1(uriBase);
const f3 = f2(responseActions);
// const f4 = f3(responseActions);
const f5 = f3(getExtractProp);
const f6 = f5(params);
f6()