---
sidebar_position: 1
---

# How EAS Works
At its core, EAS revolves around two primary contracts: registering a schema and making attestations. But what does that mean? Let's break it down.

![EASArchitecture](./img/schema-attestation.png)


## The Foundation: Attestations
Attestations are the building blocks of building trust online. Think of an attestation as a digital stamp of approval on a piece of data. It's a way for one entity to say, "I vouch for this information." and gives others the optionality to rely on that information.

But for this system to work seamlessly, we need a standardized way to structure this data. This is where schemas come into play.

## Schemas give structure to the attestation
Think of a schema as a blueprint or template. It defines the structure and format of the data you want to attest to. For example if you want to attest to someone you trust, all you'd need is a true false field for "isTrusted". Or if you wanted to vote, you might have a "eventName" and a "location" and "startTime" and "endTime". It's the builder's choice to determine the right schema for their particular use case.

Here's the general flow of how a schema is registered:
1. The schema's structure is defined (e.g., what fields it will have and the data types).
2. The schema is submitted to the Schema Registry Contract.
3. The contract assigns a unique identifier (UID) to the schema so it can be easily referenced.
4. The schema is now ready to be used for attestations!

```javascript
/// @notice A struct representing a record for a submitted schema.
struct SchemaRecord {
    bytes32 uid; // The unique identifier of the schema.
    ISchemaResolver resolver; // Optional schema resolver.
    bool revocable; // Whether the schema allows revocations explicitly.
    string schema; // Custom specification of the schema (e.g., an ABI).
}
```
Before you rush to create a new schema, it's worth checking the schemas already registered on the [Explorer](https://easscan.org/schemas). The community often contributes schemas, making it a rich resource. If you find one that fits your needs, great! If not, you can design a new one.

🎓 **Tutorial**: [**Make a Schema**](/docs/tutorials/create-a-schema.md)

## Making an Attestation
Once you've settled on a schema, the process of making an attestation is straightforward:

1. The data being attested to is structured according to a specific schema.
2. This structured data is signed by the attester, creating a digital signature either onchain or offchain.
3. The signed data, along with the schema's unique identifier, is submitted to the Attestation Contract
4. The contract verifies the data against the schema and stores the attestation.
5. The attestation is now recorded on the blockchain and can be verified by anyone!

```javascript
/// @notice A struct representing the arguments of the attestation request.
struct AttestationRequestData {
    address recipient; // The recipient of the attestation.
    uint64 expirationTime; // The time when the attestation expires (Unix timestamp).
    bool revocable; // Whether the attestation is revocable.
    bytes32 refUID; // The UID of the related attestation.
    bytes data; // Custom attestation data.
    uint256 value; // An explicit ETH amount to send to the resolver. This is important to prevent accidental user errors.
}
```
The beauty of EAS is its flexibility. You can reference previous attestations, creating a network of interconnected data points to give more context to each attestation. And if ever there's a need to update or invalidate an attestation, it can be revoked. While the original record remains, its status changes, ensuring transparency and trust.

🎓 **Tutorial**: [**Make an Attestation**](/docs/tutorials/make-an-attestation.md)

## Diving Deeper: The Technical Side
For those keen on the technical details:

- [**Schema Registry Contract:**](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol) This is how schemas are registered.
- [**Attestation Contract:**](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol) This contract manages the lifecycle of attestations, from creation to potential revocation.

## Wrapping Up
EAS is more than just a service; it's a new primitive in how we establish and manage trust online. Its simplicity and flexibility make it a powerful tool for a myriad of applications.

If you're eager to explore further, our documentation is filled with deeper dives into each aspect of EAS. Whether you're here to build or to learn, we're thrilled to have you on this journey with us.
