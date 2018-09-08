interface ConnectionPlan {
    uri: string,
    requestMethod: { method: string },
    contentType?: { 'Content-Type': string },
    extractionStep?: any,
    stub?: any,
    payload?: string | FormData
}
