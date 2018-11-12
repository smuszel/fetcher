type Deserializer = (resp: Response) => any
type Serializer = (obj: any) => any
type ResponseAction = (resp: Response) => Response
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = 'application/json'

interface FetcherConfig {
    requestMethods: {[key: string]: RequestMethod },
    responseActions: {[status: number]: ResponseAction },
    contentTypes: {[key: string]: [Serializer, ContentType] },
    acceptTypes: {[key: string]: [Deserializer, ContentType] },
    uriBase: any
}