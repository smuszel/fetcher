interface ConnectionTemplate {
    uri: string,
    requestMethod: RequestMethod,
    contentType: ContentType,
    deserialize: Deserializer,
    template: string
}

interface ConnectionPlan {
}

type Deserializer = (resp: Response) => any
type ResponseAction = (resp: Response) => Response
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = 'application/json'

// export const requestMethods = {
//     g: { method: 'GET' },
//     c: { method: 'POST' },
//     u: { method: 'PUT' },
//     d: { method: 'DELETE' },
//     m: { method: 'PATCH' }
// }

interface FetcherConfig {
    uriBase: string,
    jwt: string,
    requestMethods: {[key: string]: Deserializer }
    responseActions: {[status: number]: ResponseAction },
    deserializers: {[key: string]: Deserializer }
}
