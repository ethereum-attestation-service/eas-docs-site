---
sidebar_position: 9
---

# Delegating
Delegated Attestations enable an entity to sign an attestation while allowing another entity to cover the transaction
fee.

:::tip Delegator = Attester
When an attestation is delegated, the delegator (signer) address is the address that shows up as the attester on the attestation.
:::

## Use Cases

When using delegated attestations on EAS, the actual attester and the one covering the transaction fee can be two
different entities, allowing for various use cases. It's particularly useful when:

- A service wants to pay for its users' attestations (covering gas costs)
- An entity wants to make multiple attestations but allows the recipient or another party to pay for the transaction
  fees for it to go on-chain.

## How they work

In the [**EAS SDK**](https://github.com/ethereum-attestation-service/eas-sdk?tab=readme-ov-file#example-creating-delegated-onchain-attestations), you'll find code examples of how to create and revoke delegated attestations.

```jsx
//Example: Creating Delegated Onchain Attestations 

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

const eas = new EAS(EASContractAddress);

// Use a different account to send and pay for the attestation.
eas.connect(sender);

const delegated = await eas.getDelegated();

// Initialize SchemaEncoder with the schema string
// Note these values are sample values and should be filled with actual values
// Code samples can be found when viewing each schema on easscan.org
const schemaEncoder = new SchemaEncoder('uint256 eventId, uint8 voteIndex');
const encodedData = schemaEncoder.encodeData([
  { name: 'eventId', value: 1, type: 'uint256' },
  { name: 'voteIndex', value: 1, type: 'uint8' }
]);

const signer = new ethers.Wallet(privateKey, provider);

// Please note that if nonce isn't provided explicitly, we will try retrieving it onchain.
const response = await delegated.signDelegatedAttestation(
  {
    schema: '0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995',
    recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
    expirationTime: 0n, // Unix timestamp of when attestation expires (0 for no expiration)
    revocable: true,
    refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
    data: encodedData,
    deadline: 0n, // Unix timestamp of when signature expires (0 for no expiration)
    value: 0n
  },
  signer
);

const transaction = await eas.attestByDelegation({
  schema: '0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995',
  data: {
    recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
    expirationTime: 0n, // Unix timestamp of when attestation expires (0 for no expiration),
    revocable: true,
    refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
    data: encodedData
  },
  signature: response.signature,
  attester: await signer.getAddress(),
  deadline: 0n // Unix timestamp of when signature expires (0 for no expiration)
});

const newAttestationUID = await transaction.wait();

console.log('New attestation UID:', newAttestationUID);

console.log('Transaction receipt:', transaction.receipt);

```

## Supercharged Delegated Attestations with Proxy Contracts

Standard delegated attestations require an incrementing nonce based on the EIP-712 spec, but the proxy contract allows
you to accept delegated attestations out of order and with an expiration time. This is particularly useful when you have
a single entity like a KYC provider attesting to many users while wanting the users to pay for the gas. See the below
example proxy contract for more details.

:::tip **Example Permissioned EIP712 Proxy Contract:**
https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/eip712/proxy/examples/PermissionedEIP712Proxy.sol
:::

