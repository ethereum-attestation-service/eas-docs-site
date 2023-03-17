---
sidebar_position: 0
---

# Javascript Integration

Here, you'll find everything you need to get started with integrating EAS into a Javacript/Typescript project.

## Installing the EAS SDK

To install the EAS contracts, run the following command within your project directory:

```bash 
yarn add @ethereum-attestation-service/eas-sdk 
```

OR

```bash 
npm install @ethereum-attestation-service/eas-sdk 
```

## Using the EAS SDK

Import and initialize the library

```javascript 
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider(
  "sepolia"
);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);
```

### Viewing on-chain attestations

```javascript 
// Gets an on-chain attestation for the corresponding UID
 const attestation = await eas.getAttestation(
    "0x5134f511e0533f997e569dac711952dde21daf14b316f3cce23835defc82c065"
 );

console.log(attestation);

// Output
{
    uid: '0x5134f511e0533f997e569dac711952dde21daf14b316f3cce23835defc82c065',
    schema: '0x27d06e3659317e9a4f8154d1e849eb53d43d91fb4f219884d1684f86d797804a',
    refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
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

```javascript 
// Initialize SchemaEncoder with the schema string
const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
const encodedData = schemaEncoder.encodeData([
  { name: "eventId", value: 1, type: "uint256" },
  { name: "voteIndex", value: 1, type: "uint8" },
]);

const newAttestationUID = await eas.attest({
  data: {
    recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
    // Unix timestamp of when attestation expires. (0 for no expiration)
    expirationTime: 0,
    revocable: true,
    data: encodedData,
  },
  schema:
    "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
});
```

### Creating off-chain attestations

```javascript 
export const EAS_CONFIG = {
  address: EASContractAddress,
  version: EASVersion,
  chainId: CHAINID,
};

const offchain = new Offchain(EAS_CONFIG);

// Initialize SchemaEncoder with the schema string
const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
const encodedData = schemaEncoder.encodeData([
  { name: "eventId", value: 1, type: "uint256" },
  { name: "voteIndex", value: 1, type: "uint8" },
]);

const newAttestationUID = await offchain.signOffchainAttestation({
  recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
  // Unix timestamp of when attestation expires. (0 for no expiration)
  expirationTime: 0,
  // Unix timestamp of current time
  time: 1671219636,
  nonce: 0,
  schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
  data: encodedData,
}, signer);
```


### Revoking on-chain attestations

```javascript 
const transaction = await eas.revoke({
  uid: "0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a"
});

// Optional: Wait for transaction to be validated
await transaction.wait();
```

### Creating timestamps

To create a timestamp for a single piece of data, you can use the `timestamp` function provided by the EAS SDK. Here's an example:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const data = ethers.utils.formatBytes32String('0x1234');

const transaction = await eas.timestamp(data);

// Optional: Wait for transaction to be validated
await transaction.wait();
```

To create timestamps for multiple pieces of data, you can use the `multiTimestamp` function:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const data1 = ethers.utils.formatBytes32String('0x3e23b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289');
const data2 = ethers.utils.formatBytes32String('0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a');

const transaction = await eas.multiTimestamp([data1, data2]);

// Optional: Wait for transaction to be validated
await transaction.wait();
```

### Revoking off-chain attestations

To revoke an off-chain attestation, you can use the `revokeOffchain` function provided by the EAS SDK. Here's an example:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const data = ethers.utils.formatBytes32String('0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a');

const transaction = await eas.revokeOffchain(data);

// Optional: Wait for transaction to be validated
await transaction.wait();
```

To revoke multiple off-chain attestations, you can use the `multiRevokeOffchain` function:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const data1 = ethers.utils.formatBytes32String('0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a');
const data2 = ethers.utils.formatBytes32String('0x3e23b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289');

const transaction = await eas.multiRevokeOffchain([data1, data2]);

// Optional: Wait for transaction to be validated
await transaction.wait();
```


