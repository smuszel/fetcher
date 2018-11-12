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
* [ ] add template delimiters configuration
* [ ] add unit tests
* [ ] figure out how to create group mappings based on config keys
* [ ] add serializeUriParameterStrategies
* [ ] maybe merge accept + deserializers into tuple
* [ ] break up fetcher into smaller, memoizable functions
* [ ] refactor matchUriTemplate