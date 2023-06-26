---
sidebar_position: 2
---

# EAS Contracts
This EAS code is written in Solidity, which is a programming language that is used to write smart contracts for the Ethereum blockchain. 

EAS runs primarily on two simple smart contracts.
- One to register an attestation schema, and 
- another to make attestations on Schemas. 

There is an optional resolver contract. Elegantly simple. Limitless possibility.

**Primary Contracts**
- `EAS.sol` For making attestations. [Github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol). 
- `SchemaRegistry.sol` For registering schemas. [Github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol).
- `SchemaResolver.sol` For an optional schema resolver for more complex use cases. [Github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/SchemaResolver.sol).

:::tip Explore the contract repository on github
[https://github.com/ethereum-attestation-service/eas-contracts/](https://github.com/ethereum-attestation-service/eas-contracts/). 
:::
