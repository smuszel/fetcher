type Deserializer = (resp: Response) => any
type Serializer = (obj: any) => any
type ResponseAction = (resp: Response) => Response
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = 'application/json'

interface FetcherConfig {
    requestMethods: {[key: string]: RequestMethod },
    responseActions: {[status: number]: ResponseAction },
    serializers: {[key: string]: Serializer },
    deserializers: {[key: string]: Deserializer },
    contentTypes: {[key: string]: ContentType },
    acceptTypes: {[key: string]: ContentType },
    uriBase: any
}