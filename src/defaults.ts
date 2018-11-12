export const requestMethods = {
    g: 'GET',
    c: 'POST',
    u: 'PUT',
    d: 'DELETE',
    m: 'PATCH'
}

export const contentTypes = {
    j: [r => r.json(), 'application/json'],
    b: [r => r.blob(), ''],
    t: [r => r.text(), ''],
}

export const acceptTypes = {
    j: [obj => JSON.stringify(obj), 'application/json']
}

export const uriBase = '';

export const responseActions = {
    200: r => r
}

export const defaultFetcherConfig = {
    acceptTypes,
    contentTypes,
    requestMethods,
    responseActions,
    uriBase
} as any