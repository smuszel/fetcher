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
