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

* [ ] separate config into runtime part and init
* [ ] add uri matcher
* [ ] test reflection against obfuscators
* [ ] add regex build parameters to init config
* [ ] implement content types
* [ ] add unit tests
* [ ] abstract out plan factory
* [ ] increase abstraction level for parser
