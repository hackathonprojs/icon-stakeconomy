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
  // Check the recent blocks
  //const block = await iconService.getLastBlock().execute();
  const blockHeight = 6747351;
  const block = await iconService.getBlockByHeight(blockHeight).execute();
  console.log(block.height);


  const txList = block.getTransactions();
  console.log(txList);
  console.log(txList.length);

  txList.forEach(elem => {
    // if (elem.data && elem.data.prep && elem.data.result) {
    //   console.log("data.prep: ", elem.data.prep);
    //   console.log("data.result: ", elem.data.result);
    // }

    if (elem.data && elem.data.method && elem.data.params) {
      console.log("data.method: ", elem.data.method);
      console.log("data.params: ", elem.data.params);
    }
  })
}

test();