export const requestMethods = {
    g: 'GET',
    c: 'POST',
    u: 'PUT',
    d: 'DELETE',
    m: 'PATCH'
}

export const deserializers = {
    j: r => r.json(),
    b: r => r.blob(),
    t: r => r.text(),
}

export const serializers = {
    j: obj => JSON.stringify(obj)
}

export const acceptTypes = {
    j: 'application/json'
}

export const contentTypes = {
    j: 'application/json'
}

export const uriBase = '';