type Deserializer = (resp: Response) => any
type Serializer = (obj: any) => any
type ResponseAction = (resp: Response) => Response
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type ContentType = 'application/json' | ''

// responseActions: {[status: number]: ResponseAction },
// uriBase: any
interface BaseConfig {
    method: Record<string, RequestMethod>
    contentType: Record<string, ContentType>
    accept: Record<string, ContentType>
    serializer: Record<string, Serializer>
    deserializer: Record<string, Deserializer>
}