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
* [ ] add regex build parameters to init config
* [ ] implement content types
* [ ] add unit tests
* [ ] figure out how to parametrize group mappings
* [ ] add serializeUriParameterStrategies
