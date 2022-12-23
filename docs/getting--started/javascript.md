---
sidebar_position: 0
---

# Javascript Integration

Here, you'll find everything you need to get started with integrating EAS into a Javacript/Typescript project.

## Installing the EAS SDK

To install the EAS contracts, run the following command within your project directory:

``` bash 
yarn add @ethereum-attestation-service/eas-sdk 
```

OR

``` bash 
npm install @ethereum-attestation-service/eas-sdk 
```

## Using the EAS SDK

Import and initialize the library

``` javascript 
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export const EASContractAddress = "0x4369bE21Ed9002Fd4507Df254CF249feF6F8E7E2"; // Goerli v0.19

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider(
  "goerli"
);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);
```

### Viewing on-chain attestations

``` javascript 
// Gets an on-chain attestation for the corresponding UUID
const attestation = await  eas.getAttestation({
  uuid:'0x5134f511e0533f997e569dac711952dde21daf14b316f3cce23835defc82c065'
});

console.log(attestation);

// Output
{
    uuid: '0x5134f511e0533f997e569dac711952dde21daf14b316f3cce23835defc82c065',
    schema: '0x27d06e3659317e9a4f8154d1e849eb53d43d91fb4f219884d1684f86d797804a',
    refUUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
    time: 1671219600,
    expirationTime: 0,
    revocationTime: 1671219636,
    recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
    attester: '0x1e3de6aE412cA218FD2ae3379750388D414532dc',
    revocable: true,
    data: '0x0000000000000000000000000000000000000000000000000000000000000000'
}
```



### Creating on-chain attestations

``` javascript 
// Initialize SchemaEncoder with the schema string
const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
const encodedData = schemaEncoder.encodeData([1337, 2]);

const newAttestationUUID = await eas.attest({
  recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
  // Unix timestamp of when attestation expires. (0 for no expiration)
  expirationTime: 0,
  revocable: true,
  schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
  data: encodedData,
});
```

### Creating off-chain attestations

``` javascript 
export const EAS_CONFIG = {
  address: EASContractAddress,
  version: EASVersion,
  chainId: CHAINID,
};

const offchain = new Offchain(EAS_CONFIG);

// Initialize SchemaEncoder with the schema string
const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
const encodedData = schemaEncoder.encodeData([1337, 2]);

const newAttestationUUID = await offchain.signOffchainAttestation({
  recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
  // Unix timestamp of when attestation expires. (0 for no expiration)
  expirationTime: 0,
  // Unix timestamp of current time
  time: 1671219636,
  nonce: 0,
  schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
  data: encodedData,
});
```


### Revoking on-chain attestations

``` javascript 
const transaction = await eas.revoke({
  uuid: "0x0000000000000000000000000000000000000000000000000000000000000000"
});

// Optional: Wait for transaction to be validated
await transaction.wait();
```


## 🛳️ Deployments

:::tip Mainnet Launch Q1-2023
We're making a few final changes and will be launching on Ethereum Mainnet in early 2023.
:::

### Goerli Testnet `v0.14`

:::info EAS Deployment

- **Contract:
  ** [0x6e195B51493e56d59768f8a87230ADe73BD4FC86](https://goerli.etherscan.io/address/0x6e195B51493e56d59768f8a87230ADe73BD4FC86)
- **Deployment & ABI:
  ** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/goerli/EAS.json)
  :::

:::info SchemaRegistry

- **Contract:
  ** [0xB6652C033728658e1413F36cce9cA7f7eEbd5872](https://goerli.etherscan.io/address/0xB6652C033728658e1413F36cce9cA7f7eEbd5872)
- **Deployment & ABI:
  ** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/goerli/SchemaRegistry.json)
  :::






