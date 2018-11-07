export const deserializers = {
    j: r => r && r.json(),
    b: r => r && r.blob(),
    t: r => r && r.text(),
}