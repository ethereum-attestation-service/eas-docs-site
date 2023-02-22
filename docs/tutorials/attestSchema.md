---
sidebar_position: 3
---

# Make an Attestation

Anyone can attest with any [Attestation Schema](https://easscan.com/schemas) registered with EAS. An attestation can be
made in a few ways.

- [EASScan website](https://easscan.com/attestation/create) - This is the easiest way to make an attestation.
- Using the [EAS SDK](https://github.com/ethereum-attestation-service/eas-sdk) - This is the recommended way to make an
  attestation when you are building a dApp, especially when you want to make off-chain attestations.
- Interacting with the EAS contract directly - This is the most flexible way to make an attestation especially if you
  need to make attestations from a smart contract.

## Create an Attestation on the EAS Website 🧙

Go to => [https://easscan.com/schemas](https://easscan.com/schemas):

:::tip Tip
Make sure you've connected your wallet to EAS.
:::

[//]: # ()
[//]: # (## Making Attestations using the contracts 📄)

[//]: # ()
[//]: # (In order to make attestations with EAS, you will need to:)

[//]: # ()
[//]: # (#### 1.Register a schema with the global schema registry.)

[//]: # ()
[//]: # (This defines the data fields and structure of the attested claims that you will be making. You can also use an existing)

[//]: # (schema if the fields match your use case need.)

[//]: # ()
[//]: # (#### 2. Use the `attest` or `attestByDelegation` functions of the EAS contract to make attested claims.)

[//]: # ()
[//]: # (These functions take the following parameters:)

[//]: # ()
[//]: # (- `recipient`: The optional address of the user for whom you are making the attested claims.)

[//]: # (- `schema`: The ID of the schema that defines the data fields and structure of the attested claims.)

[//]: # (- `expirationTime`: The optional time at which the attested claims will expire and no longer be considered valid.)

[//]: # (- `revocable`: A boolean value indicating whether the attested claims can be revoked by the attester.)

[//]: # (- `refUID`: The UID of an existing attestation that this attestation is referencing. This can be used to create a)

[//]: # (  chain of attested claims.)

[//]: # (- `data`: The attested claims, encoded as a byte array using the EIP712 encoding format.)

[//]: # (- `attester`: &#40;optional&#41; The address of the attester who is making the attested claims. This is only used for)

[//]: # (  attestByDelegation and should be the address of the signer of the EIP712 signature.)

[//]: # (- `v`: &#40;optional&#41; The v component of the EIP712 signature. This is only used for attestByDelegation.)

[//]: # (- `r`: &#40;optional&#41; The r component of the EIP712 signature. This is only used for attestByDelegation.)

[//]: # (- `s`: &#40;optional&#41; The s component of the EIP712 signature. This is only used for attestByDelegation.)

[//]: # ()
[//]: # (#### 3. Use the `getAttestation` function of the EAS contract to retrieve the attested claims that you have made.)

[//]: # ()
[//]: # (This function takes the UID of the attested claims as a parameter and returns a Attestation struct containing the)

[//]: # (following fields:)

[//]: # ()
[//]: # (- `recipient`: The address of the user for whom the attested claims were made.)

[//]: # (- `schema`: The ID of the schema that defines the data fields and structure of the attested claims.)

[//]: # (- `expirationTime`: The time at which the attested claims will expire and no longer be considered valid.)

[//]: # (- `revocable`: A boolean value indicating whether the attested claims can be revoked by the attester.)

[//]: # (- `refUID`: The UID of the attestation that this attestation is referencing.)

[//]: # (- `data`: The attested claims, encoded as a byte array using the EIP712 encoding format.)

[//]: # (- `attester`: The address of the attester who made the attested claims.)

[//]: # (- `uid`: The UID of the attested claims.)

[//]: # (- `revoked`: A boolean value indicating whether the attested claims have been revoked.)

[//]: # ()
[//]: # (#### 4. Verify the attestation using the `verify` function in the EAS contract.)

[//]: # ()
[//]: # (This function takes the following parameters:)

[//]: # ()
[//]: # (- `uid`: The UID of the attestation that you want to verify.)

[//]: # (- `recipient`: The address of the user whose identity the attestation is about.)

[//]: # (- `schema`: The ID of the schema that was used to make the attestation.)

[//]: # (- `expirationTime`: The time at which the attestation will expire and can no longer be verified.)

[//]: # (- `revocable`: A boolean value that indicates whether the attestation can be revoked by the attester.)

[//]: # (- `refUID`: A reference UID for the attestation, which can be used to link the attestation to other related)

[//]: # (  attestations.)

[//]: # (- `data`: The data that was included in the attestation, encoded as a byte array.)

[//]: # ()
[//]: # (##### 5. &#40;Optional&#41; Use the `revoke` or `revokeByDelegation` functions.)

[//]: # ()
[//]: # (These will revoke attested claims that you have made.)

## The Attestation Contract 📄

`Attest` or `Revoke` attestations by interacting with the EAS contract directly. [View the entire contract on github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol).
