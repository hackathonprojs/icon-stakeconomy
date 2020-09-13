const IconService = require('icon-sdk-js');
const { IconWallet, HttpProvider, IconBuilder, IconAmount, IconConverter, SignedTransaction } = IconService;
const { CallBuilder } = IconBuilder;

/*  HttpProvider is used to communicate with http. 
    In this example, we use Yeouido node as provider. */
const provider = new HttpProvider('https://bicon.net.solidwallet.io/api/v3');

/* Create IconService instance */
const iconService = new IconService(provider);

// ### Queries


//  All query methods of `IconService` returns a `HttpCall` instance. To execute the request and get the result value, you need to run `execute()` function of `HttpCall` instance. All requests will be executed **asynchronously**. Synchronous request is not available. For more information, check [API reference documentation](https://www.icondev.io/docs/javascript-api-reference#section-iconservice).


//  ### Queries

// All query methods of `IconService` returns a `HttpCall` instance. To execute the request and get the result value, you need to run `execute()` function of `HttpCall` instance. All requests will be executed **asynchronously**. Synchronous request is not available. For more information, check [API reference documentation](https://www.icondev.io/docs/javascript-api-reference#section-iconservice).


async function test() {
  const address = 'hxe1ac743a29006c4d0c18da8df82f225b1ccb6d69';
  //const tokenAddress = this.scoreAddress;
  const tokenAddress = 'cx0000000000000000000000000000000000000000';
  // Method name to check the balance
  const methodName = "getDelegation";
  // You must enter the given key name (“_owner”).
  const params = {
      address: address
  }
  const callBuilder = new CallBuilder();
  const call = callBuilder
      .to(tokenAddress)
      .method(methodName)
      .params(params)
      .build();
  // Check the delegation of an address
  const delegation = await iconService.call(call).execute();
  console.log(delegation);
}

test();


