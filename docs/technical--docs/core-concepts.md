---
sidebar_position: 3
---

# Core Concepts
The Ethereum Attestation Service (EAS) is a decentralized and open-source platform that enables users to create and verify attestations on the Ethereum blockchain. Attestations are digital records that certify the authenticity of information. They can be used to verify a variety of things, such as a person's identity, the ownership of an asset, or the authenticity of a credential.

In this section, we will cover the key concepts and terms that are important to understand when using EAS.

## Attestations
Attestations are digital records made by anyone about anything that certify the authenticity of information. They are created by an Attestor, who signs the attestation with their Ethereum wallet and adds it to the Ethereum blockchain. Attestations can be verified by anyone with access to the Ethereum blockchain and the attestation's unique UID.

Attestations are made up of two key components: the schema and the attestation data. The schema is a predefined structure for creating and verifying attestations. It defines the data types, format, and composition of an attestation. EAS uses Solidity ABI types as acceptable fields for schemas. The attestation data is the actual information that is being attested to. It must follow the structure defined in the schema in order to be considered a valid attestation.

## On-chain Attestations
An on-chain attestation is an attestation that is published on the blockchain for the world to see. Because of this it’s timestamp can be guaranteed and any smart contract on the blockchain can easily reference and verify the attestation. Use cases: Oracles, reputation, KYC validation for DeFi with securities, supply chain, etc.

Almost anything that can be done on-chain can be done off-chain, but you cant retain privacy well onchain.

## Off-chain Attestations
An off-chain attestation is an attestation that is not stored in the blockchain. An off-chain attestation can be public or private. Off-chain attestations carry the entire attestation data and digital signature required to verify and validate the authenticity of itself. Off-chain uses: Ticketing, Drivers license, Passport, Vote, Tweets (messages). You can also timestamp and revoke off-chain attestations on-chain giving them additional superpowers.

## Schemas
Schemas are predefined structures for creating and verifying attestations. They define the data types, format, and composition of an attestation. EAS uses Solidity ABI types as acceptable fields for schemas. Schemas are important because they provide a common format and structure for attestation data, which allows different attestations to be composed and verified in a trustless manner. This enables interoperability and composability between different attestation protocols and solutions.

## Attestors
Attestors are individuals or organizations that create and sign attestations. They are responsible for adding the attestation to the Ethereum blockchain and making it available for verification. Attestors can be anyone with an Ethereum wallet, and they can create attestations for any purpose.

## Verifiers
Verifiers are individuals or organizations that verify the authenticity of attestations. They can do this by looking up the attestation on the Ethereum blockchain and checking that it has been signed by a trusted Attestor. Verifiers can be anyone with access to the Ethereum blockchain and the attestation's UID.

## Users
Users are entities that use and rely on attestations to make decisions or take actions. They use the information provided in the attestation to verify the authenticity and integrity of the information being attested to, and they rely on the reputation and trustworthiness of the attestor as a form of backing for the attestation.

## Gas Fees
Gas fees are the fees that are paid to Ethereum miners to include transactions in a block. When creating or verifying attestations on EAS, gas fees must be paid to cover the cost of executing the transactions on the Ethereum blockchain.

## Ethereum ABI Types
The Ethereum Application Binary Interface (ABI) defines the data types that can be used in smart contracts and other Ethereum transactions. EAS uses ABI types as acceptable fields for schemas.

## EAS Registry
The EAS registry is a decentralized directory of all the schemas that have been created and registered on EAS. It enables anyone to search for and view available schemas, as well as create and register their own schemas.

## Getting Started
To get started with EAS, you will need an Ethereum wallet and some ETH to pay for transaction fees. There are several options for creating an Ethereum wallet, including online services like Metamask and Argent, as well as hardware wallets like the Ledger Nano.

Once you have these tools setup, you can start creating and using attestations on EAS. You can either use existing schemas or create your own custom schemas to fit your specific use case. You can also use the EAS registry to search for and view existing attestations and schemas.


