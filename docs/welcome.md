---
sidebar_position: 1
---

# Welcome to EAS 

## 👋 Introduction
**Ethereum Attestation Service (EAS)** is global base layer protocol for registering and creating [Attestations](/docs/learn/what-are-attestations). EAS is an open-source, composable, permissionless, tokenless, public good built on Ethereum.

### 🌎 The Global Registry for Attestations
There are several existing tailor-made on-chain solutions for identity, verifications, claims, and cryptographic proofs. Each of these innovations are essential building blocks for specific use cases and communities, but each tailor-made protocol increases fragmentation and limits composability. 

EAS introduces and serves as the base layer where all attestors and innovators can coordinate, create, register, and compose unique attestation schemas.

![EAS Stack](/img/EAS-Stack-Legos-transparent.png)

## ✨ Community Purpose

Our `purpose` is to be the global base layer where anything and everything is attested to on-chain.

Our `vision` is that EAS enables new economic, democratic, and decentralized ecosystems that create a better world for future generations.

Our `mission` is to bring as many attestations on-chain. 
We’ll do that by attracting and coordinating the most promising developers and innovators passionate about simple verifications & trustless economies.

We `stand` for the early promises and values of blockchain. EAS will always be open-source, permissionless, tokenless, composable, transparent, and community-owned.

We’ve `built` the base layer. It’s up **all** of us to create the future.



### 🔓 EAS is an open-source public good
As builders we recognized the need for a public service that enabled greater composability and standardization to create the attestation layer in Web3.

EAS is built on the original promises of blockchain to be completely open-source and owned by community for the community. As a public good, EAS is tokenless and permissionless built to coordinate ETH ecosystem growth. Use ETH to settle transactions. 

### 🚄 Elegantly simple smart contracts
EAS runs on two elegant and simple smart contracts. One for **registering attestation Schemas**, and another to **attest to them**. Schemas can be registered for any use case and attestations can be done on-chain or off-chain.

In addition, we provide a resolver contract for advanced use cases, such as on-chain verification of attestation data, and also attaching payments to attestations (which makes a new suite of powerful web3 applications possible).

#### [#1] Register a new schema

``` jsx showLineNumbers title="/contracts/EAS.sol"
function struct Attestation {
      // A unique identifier of the attestation.
      bytes32 uuid
      // A unique identifier of the schema.
      bytes32 schema
      // The UUID of the related attestation.
      bytes32 refUUID
      // The time when the attestation was created.
      uint32 time
      // The time when the attestation expires.
      uint32 expirationTime
      // The time when the attestation was revoked.
      uint32 revocationTime
      // The recipient of the attestation.
      address recipient
      // The attester/sender of the attestation.
      address attester
      // Custom attestation data.
      bytes data
}
```
Explore the entire [Schema Registry Contract](https://github.com/ethereum-attestation-service/eas-contracts/blob/f88a8943a2ecb025c58fbb4c664a73ccb26d7fba/contracts/SchemaRegistry.sol) contract on github 


#### [#2] Attest to attestation schemas
``` js showLineNumbers title="/contracts/EAS.sol"
    function attest(
        address recipient,
        bytes32 schema,
        uint32 expirationTime,
        bytes32 refUUID,
        bytes calldata data
    ) public payable virtual returns (bytes32) {
        return _attest(recipient, schema, expirationTime, refUUID, data, msg.sender);
    }
```
Explore the entire [Attestation Contract](https://github.com/ethereum-attestation-service/eas-contracts/blob/f88a8943a2ecb025c58fbb4c664a73ccb26d7fba/contracts/EAS.sol) on github 



