---
sidebar_position: 6
---

# Timestamping Attestations
Add a verifiable timestamp to your off-chain attestations using the EAS SDK or Easscan UI.

## Concept
Off-chain attestations do not have the same verifiability and guarantees as an on-chain timestamp. When an attestation is made off-chain it still retains the authenticity of the signature and has the entire attestation data, however, because it is made off-chain, its timestamp cannot be guaranteed. Anyone could theoretically say that the attestation was made at a particular point in time when it really was not. There would be no way to prove it. 

One of the main advantages of a blockchain is that you have a verifiable timestamp when the transaction occurs. This gives the attestation proof of existence when it occurred. Off-chain attestations do not natively have this.

To address this issue, we built a function in the `EAS SDK` that allows you to **timestamp off-chain attestation UIDs on-chain**. When you timestamp the UID on-chain, you are attesting to the off-chain UID on-chain.

:::tip Remember
The attestation UID is a hash of the entire attestation. By timestamping the UID, you are timestamping the hash of the attestation.
:::

## Main Benefits
- **Immutable proof of existence:** Timestamping an off-chain attestation on-chain provides an immutable proof of existence at a certain point in time. This is because the timestamp is recorded on Ethereum and is therefore publicly verifiable. Timestamping provides a way to prove that the attestation data existed at a certain point in time, which is especially useful in legal or compliance contexts or when ordinals are important.

- **Protection against fraud:** Timestamping also provides protection against fraud, by ensuring that the attestation data was not created after the timestamp was recorded. This provides a tamper-proof guarantee that the attestation existed before the timestamp was recorded.

### Timestamp an Attestation UID
To timestamp an off-chain attestation UID on-chain, you can use the timestamp function provided by the EAS SDK. Here's an example:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const uid = "0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a";

const transaction = await eas.timestamp(uid);

// Optional: Wait for the transaction to be validated
await transaction.wait();
```

### Batch Timestamp
EAS also allows people to batch timestamp UIDs in one transaction using a Merkle tree. EAS will generate a Merkle tree root comprising of all the off-chain attestation UIDs that are now being timestamped. The on-chain transaction only includes a single hash of all the attestation UIDs, saving a ton of gas. After the Merkle root is attested to, each UID inherits the timestamp and can be independently verified against the Merkle tree root hash.

To timestamp multiple off-chain attestation UIDs in a single transaction, you can use the multiTimestamp function:

```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const uids = [
  "0x6776de8122c352b4d671003e58ca112aedb99f34c629a1d1fe3b332504e2943a",
  "0x3e23b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289"
];

const transaction = await eas.multiTimestamp(uids);

// Optional: Wait for transaction to be validated
await transaction.wait();
```

:::tip Anyone can do it 
Anyone can timestamp and off-chain attestation UID on-chain. It doesn't matter who (which address) actually is the one timestamping it. When the attestation UID is timestamped on-chain you can now prove with certainty that the attestation did not occur AFTER the on-chain timestamp.
:::

## Conclusion
Timestamping off-chain attestations on-chain provides a verifiable timestamp that proves the authenticity and order of when the attestation was made. This can be useful in situations where the authenticity and validity of the attestation are important. The EAS SDK provides easy-to-use functions to timestamp single and multiple off-chain attestation UIDs on-chain, and to verify their timestamps.
