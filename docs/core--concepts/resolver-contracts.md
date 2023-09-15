---
sidebar_position: 8 
---

# Resolver Contracts
Resolver Contracts are a powerful tool that allows developers to introduce custom logic to their schemas. Think of them as gatekeepers or hooks, ensuring that attestations meet specific criteria before they're accepted. Let's delve into the concept, its workings, and some practical examples.

## What's a Resolver Contract?
A `Resolver Contract` is essentially an external smart contract that acts as a hook for a Schema. It ensures that attestations adhere to certain rules or conditions before they're finalized. This allows developers to extend the functionality of a schema, be it restricting attestations to a certain group, integrating payment mechanisms, or even minting NFTs under specific conditions.

## How Do Resolver Contracts Work?
When you create a schema, you might want it to follow certain rules or behaviors. This is where resolver contracts come into play. When attaching a resolver contract to a schema, you can ensure that the schema behaves according to the logic defined in the resolver contract.

For those who want a deeper dive, the [**resolver repository**](https://github.com/ethereum-attestation-service/eas-contracts/tree/master/contracts/resolver) in the EAS GitHub Repository serves as a foundational contract for creating custom resolver contracts. It provides the necessary framework to validate and process attestations in a modular manner.

**🎓 Tutorial:** [**Resolver Contracts**](/docs/tutorials/resolver-contracts.md)

:::caution Important Note
Resolver Contracts are external contracts to EAS. 

EAS does not verify, endorse, or audit the resolver's people create and set on schemas. Do your own due diligence and do not interact with resolver contracts you are not familiar with.
:::

## Practical Examples
While the possibilities are vast, here are some example resolver contracts to give you an idea:

| Resolver Name            | Description                                                                                                   | Example                                                                                                       |
|--------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **Attester Resolver**    | This resolver ensures that an attestation is created by a specific attester. It's like a VIP pass, where only a particular entity is allowed to attest. | [AttesterResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/AttesterResolver.sol) |
| **Expiration Time Resolver** | This resolver checks if an attestation's expiration time meets a certain condition. Think of it as a "best before" date for attestations. | [ExpirationTimeResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/ExpirationTimeResolver.sol) |
| **Paying Resolver**      | This resolver facilitates payments to attesters when they create an attestation. It's a way to incentivize or reward certain attestations. | [PayingResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/PayingResolver.sol) |
| **Recipient Resolver**   | Ensures an attestation is made to a specific recipient. It's like sending a letter, where only the intended recipient should receive it. | [RecipientResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/RecipientResolver.sol) |
| **Revocation Resolver**  | Provides control over revocations of attestations. It's a way to manage and control the revocation process. | [RevocationResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/RevocationResolver.sol) |
| **Token Resolver**       | Checks if a specific amount of tokens has been approved for an attestation. It integrates token transactions into the attestation process. | [TokenResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/TokenResolver.sol) |
| **Value Resolver**       | Ensures that an attestation is accompanied by a specific amount of ETH. It's like paying a fee or deposit for the attestation. | [ValueResolver.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/ValueResolver.sol) |


## Need Assistance or Have Queries?
If you're looking for guidance or have questions about resolver contracts, don't hesitate to reach out.

DM us on Twitter @eas_eth, and we'll set up a Telegram chat with your team to assist further!