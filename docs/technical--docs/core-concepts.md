---
sidebar_position: 3
---

# Core Concepts
The Ethereum Attestation Service (EAS) is a platform built on the Ethereum blockchain that allows anyone to create and use digital records known as attestations. Attestations verify the authenticity of information, such as a person's identity or credentials.

In this section, we'll cover some of the key concepts and terminology related to EAS and its underlying technology.

## Smart contracts and EAS
Smart contracts are an essential part of the EAS platform. They are used to create and manage attestations, as well as to interact with the EAS registry of attestation schemas.

Smart contracts on the EAS platform are written in Solidity, a high-level programming language for writing smart contracts on Ethereum. Solidity allows developers to specify the rules and conditions for executing a contract, as well as to define the data and functions that the contract can interact with.

## Blockchain and distributed ledger technology
EAS is built on the Ethereum blockchain, which is a decentralized, distributed ledger that allows for the creation and execution of smart contracts. A blockchain is a type of database that is shared across a network of computers, known as nodes. Each node maintains a copy of the ledger, and new transactions or data are added to the ledger through a consensus mechanism.

This decentralized, distributed nature of blockchain technology allows for trustless, secure, and transparent transactions and data storage. It also enables the creation of smart contracts, which are self-executing pieces of code that can enforce the terms of a contract without the need for intermediaries.

## Attestations
Attestations are digital records that verify the authenticity of information. They can be used in a wide range of applications, such as verifying a person's identity or credentials.

For example, if you need to prove that you have a certain degree or certification, you can use an attestation to provide evidence of this. This can be useful in a variety of situations, such as applying for a job or trying to access certain services.

Attestations are useful because they provide a way to verify the authenticity of information in a trustless manner. This means that you don't need to rely on a centralized authority to verify the information, which can be useful in situations where it's difficult or impossible to do so.

## The EAS platform
EAS is a free, open-source, and permissionless platform built on Ethereum that enables anyone to create and use attestations. It includes a built-in attestation service and a registry of attestation schemas, which allows for interoperability and composability between different attestation protocols and solutions.

EAS does not pressupose any specific schema for a use case, which allows the community to create the right schemas for the right users over time. This flexibility and openness make EAS a public good that can help the Ethereum ecosystem grow and evolve.


## Key Terms & Concepts
EAS uses a number of key terms and concepts that are important to understand if you want to build on the platform. Some of the most important ones include:

#### **EIP712**
EIP712 is a standard for signing and verifying data in smart contracts on Ethereum. It allows for the creation of structured messages with typed data, which can be signed by the sender and verified by the recipient. EAS uses EIP712 to verify attestations and ensure their authenticity.

#### **DIDs**
DIDs, or decentralized identifiers, are unique, verifiable, and cryptographically secure identifiers that are managed on a blockchain. They can be used to identify entities, such as people, organizations, or devices, in a decentralized and trustless manner. 

#### **Attesters and verifiers** 
Attesters are entities that create attestations, and verifiers are entities that verify the authenticity of attestations. In the EAS platform, attesters and verifiers can be individuals, organizations, or even smart contracts.

#### **Schemas** 
A schema is a template or blueprint for an attestation. It defines the structure and content of an attestation, as well as the rules for creating and verifying it. EAS includes a registry of attestation schemas that can be used and extended by developers.

#### **Attestation service**
The attestation service is the main component of the EAS platform. It is a smart contract that allows attesters and verifiers to create and verify attestations using the available schemas in the registry.

#### **Schema registry**
The attestation registry is a component of the EAS platform that stores the available attestation schemas. It is a smart contract that allows developers to register new schemas, extend existing schemas, and query the registry for available schemas. The attestation registry is used by the attestation service to create and verify attestations.

#### **Verifiable credentials and claims**
Verifiable credentials & claims are types of attestations that are used to prove the possession of certain attributes or characteristics, such as a person's identity, qualifications, or membership in a group. Verifiable credentials are digital representations of physical credentials, such as a driver's license or a passport, while claims are more general statements that can be used to assert a fact or belief. EAS allows for the creation and verification of verifiable credentials and claims using smart contracts and cryptographic proofs and record them as attestations. This enables the creation of a decentralized and trustless system for proving the possession of certain attributes or characteristics.

#### **Cryptographic proofs**
Cryptographic proofs are mathematical methods for proving the authenticity of a message or data. They use cryptographic algorithms and protocols to generate a unique signature or token that can be used to verify the authenticity of the data. EAS uses cryptographic proofs to verify the authenticity of attestations and ensure that they have not been tampered with. This allows for the creation of secure, trustless attestations that can be verified by anyone.

#### **Open-source** 
Open-source technology refers to software or other products that are made available with their source code, allowing anyone to freely access, modify, and distribute the code. Open-source technology is often collaborative and community-driven, and it is typically developed and maintained by a community of volunteers or organizations.

#### **Permissionless** 
Permissionless applications or systems are ones that do not require explicit permission from a centralized authority to access or use. This means that anyone can use the application or system without having to go through a specific process or obtain approval from a specific entity. Permissionless systems are often decentralized and open-source, and they are designed to be accessible and inclusive.

#### **Public goods**
In Ethereum, a public good is a resource or service that is available to all members of the community without discrimination, and that is not controlled by a centralized entity. Public goods are often open-source and permissionless, meaning that anyone can access and use them without needing permission from anyone else.

Examples of public goods in Ethereum include the Ethereum blockchain itself, open-source development tools and libraries, and community-built infrastructure or services. Public goods can help to promote collaboration, innovation, and adoption within the Ethereum ecosystem, and they are an important part of the decentralized, open-source nature of the platform.

#### **Decentralization**
Decentralization refers to the distribution of power, authority, or control away from a central authority or location. Decentralization can be applied to various systems, including political, economic, and technological systems. In the context of technology, decentralization often involves the use of distributed ledger technology, such as blockchain, to enable peer-to-peer interactions and transactions without the need for intermediaries.

#### **Interoperability** 
Interoperability is the ability of different systems, applications, or devices to work together and exchange information. In the context of EAS, interoperability refers to the ability of different attestation protocols and solutions to work together and share information, enabling the attestation layer to grow and change over time.

#### **Composability**
Composability is the ability of different systems, applications, or components to be combined and used together to create more complex or sophisticated solutions. In the context of EAS, composability refers to the ability of different attestation schemas to be combined and used together to create more complex attestation protocols and solutions. 

#### **Trustless**
Trustless systems are ones that do not require trust in a central authority or intermediary. In a trustless system, transactions or interactions are secured and validated through cryptographic mechanisms, such as digital signatures, rather than relying on trust in a central authority. Trustless systems are often decentralized and transparent, and they can provide a secure and reliable way to verify the authenticity of information or transactions.