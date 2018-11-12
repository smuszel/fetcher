import { fetchExt } from "./fetchExt";
import { defaultFetcherConfig } from "./defaults";

const connectionPlans = {
    groupA: {
        getExtractProp: ';@entity/:id',
        createEntityWithJson: 'j;c@abc/entity',
        downloadBlobWithQuery: 'b;@downloads/:entityType/:id'
    }
}

const fetcher = fetchExt(defaultFetcherConfig)
console.log(fetcher);