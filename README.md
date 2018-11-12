<!-- ### Example

```
// connectionPlans.ts

  export const connectionPlans = {
    customer: {
      getDetails = id => ({
        uri: `customer/$(id}`,
        requestMethod: constants.get,
        extractionStep: r => r.customer
      })
    }
    ...
  } 
  
// Component.ts
 
async getCustomerData() {
  const id = 42
  const plan = connectionPlans.customer.getDetails(id);
  
  const customer = await fetcher(plan);
  
  // custom logic over customers
}
``` -->

### Todos

* [x] separate config into runtime part and init
* [x] add uri matcher
* [x] maybe merge accept + deserializers into tuple
* [x] figure out how to create group mappings based on config keys
* [ ] refactor fetcher to break up into smaller pieces
* [ ] refactor fetcher to eagar eval some lookups
* [ ] refactor fetcher to abstract regex groups
* [ ] refactor matchUriTemplate
* [ ] add serializeUriParameterStrategies
* [ ] add template delimiters configuration
* [ ] add unit tests