type Deserializer = (resp: Response) => any
type ResponseAction = (resp: Response) => Response
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = 'application/json'

interface ConnectionPlan {
    uri: string,
    requestMethod: RequestMethod,
    contentType: ContentType,
    deserialize: Deserializer
}

interface FetcherConfig {
    uriBase: string,
    jwt: string,
    requestMethods: {[key: string]: Deserializer }
    responseActions: {[status: number]: ResponseAction },
    deserializers: {[key: string]: Deserializer }
}
