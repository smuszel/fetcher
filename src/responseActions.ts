export const responseActions: {[code: number]: (resp: Response) => void } = {
    200: resp => resp,
    403: resp => {
        const entityMatch = resp.url.match(/\w+(?=\/\d+)/);
        const mainRoute = entityMatch && findMainRoute(entityMatch[0]);

        if (mainRoute) {
            travel(mainRoute);
        } else {
            travel(routes.unauthorized);
        }
    },
}