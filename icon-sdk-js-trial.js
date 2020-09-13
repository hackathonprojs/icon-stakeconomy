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


/**
 * try to call getDelgation to find out if an address has done any delegation (it has done voting yet)
 * getDelegation is the from contract: 
 * https://bicon.tracker.solidwallet.io/contract/cx0000000000000000000000000000000000000000#readcontract
 */
async function test() {
  const address = 'hxe1ac743a29006c4d0c18da8df82f225b1ccb6d69';
  //const tokenAddress = this.scoreAddress;
  const contractAddress = 'cx0000000000000000000000000000000000000000';
  // Method name to check the balance
  const methodName = "getDelegation";
  // the parameter name can be seen here: https://bicon.tracker.solidwallet.io/contract/cx0000000000000000000000000000000000000000#readcontract
  const params = {
      address: address
  }
  const callBuilder = new CallBuilder();
  const call = callBuilder
      .to(contractAddress)
      .method(methodName)
      .params(params)
      .build();
  // Check the delegation of an address
  const delegation = await iconService.call(call).execute();
  console.log(delegation);

  // sample result: 
//   {
//     delegations: [
//       {
//         address: 'hxaad52424d4aec9dac7d9f6796da527f471269d2c',
//         value: '0xde0b6b3a7640000'
//       }
//     ],
//     totalDelegated: '0xde0b6b3a7640000',
//     votingPower: '0x0'
//   }
}

test();


