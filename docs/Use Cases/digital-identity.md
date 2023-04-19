---
sidebar_position: 1
---

# Digital Identity

## Problem
Digital identity has been a long sought after challenge to solve. The industry has been building siloed and centralized identity solutions, but the problem is that they are often built one layer too high. Identity is not a single, fixed thing that can be presented in a static way. Rather, identity is an aggregation of different aspects of an individual's life, such as their relationships, roles, achievements, and more. These different aspects are represented through various attestations made by different entities, such as family members, employers, governments, and other organizations.

The challenge is that there is currently no base layer for any entity to make attestations about anything. Without a standardized and open platform for creating and verifying attestations, identity solutions will continue to be fragmented and incomplete. This results in a lack of trust and interoperability between different identity solutions, making it difficult for individuals to manage their identity in a decentralized and secure way and makes increasingly tedious and difficult for a developer to manage all the integrations.

## Opportunity
To truly form identities like how it works in the physical world, we need to create a standardized and decentralized platform that allows entities to make attestations about each other. Such a platform would provide a common framework for creating and verifying attestations and enable the aggregation of these attestations into a complete digital identity.

A base layer for attestations would allow different organizations and services to provide attestations about different aspects of a person's life, such as education, work history, and other credentials. Individuals would then be able to aggregate these attestations into a single identity that they could use across multiple services and applications.

This approach would enable digital identity to be more flexible, customizable, and context-dependent, reflecting the multi-dimensional nature of identity in the physical world. By providing a shared platform for attestations and digital identity, we can enable a new generation of reputation systems, personalized experiences, and secure and privacy-preserving digital interactions.

## Let's explore an example
Alice has a digital identity that is composed of attestations made by different entities. She has an attestation from her friends that she is trustworthy and kind, an attestation from the government that she is a citizen and holds a driver's license, and an attestation from her employers that she has certain skills and experience in her field.

These different attestations form the basis of her digital identity, which she can use to authenticate herself to various services and applications. For example, she can use her driver's license attestation to prove her identity when renting a car, and she can use her work attestation to prove her skills when applying for a job.

Over time, Alice's digital identity can grow and change as she accumulates more attestations from different entities. This enables her to have a more complete and nuanced digital representation of herself, which can be used across a wide range of services and applications.

## Taking a Privacy First Approach
:::danger Developers must take a privacy-first approach
:::

EAS does not presuppose which privacy-preserving technology is best for any use case. However, the privacy of individuals must be a top priority.

The privacy of individuals must be a top priority. For example, instead of a government attesting to someone's entire passport data, the government or identity service would only need to attest to a hash of the passport document and its expiration date. 

Similarly, for a KYC compliance, the KYC service would only need to attest to a true/false flag that shows that the address successfully passed their KYC compliance process. It wouldn't need to store any information beyond that.

EAS also allows users to create [Private Data Attestations](/docs/tutorials/private-data-attestations). `Private Data Attestations` take advantage of Merkle Trees' unique capabilities to selectively disclose specific data fields without compromising overall privacy. This innovative feature allows users to create attestations with a single "private data" field, which contains the hash of a Merkle tree root. As a result, users can securely store and share particular parts of their attested data while preserving their privacy.

Attestations with `Zero Knowledge Proofs` are another path forward to explore. 

## Sample Schema
This is a sample schema for a digital identity card, similar to a driver's license. The schema includes fields for the individual's name, date of birth, address, photo hash, and license number. However, the power of EAS is that the schema can be customized to include any relevant information for the individual's digital identity, and even include a resolver contract for more versatility and control of how the schema is used.

:::tip Tip
This schema should be made off-chain or with privacy preserving technologies.
:::

```bash jsx
string name,
uint64 dateOfBirth,
bytes32 address,
bytes32 photoHash,
bytes32 licenseNumber
```
- `name`: A string value representing the name of the person.
- `dateOfBirth`: A unix timestamp value representing the date of birth of the person.
- `address`: A bytes hash representing the address of the person.
- `photoHash`: A bytes hash representing the hash of the photo of the person.
- `licenseNumber`: A string value representing the license number of the person.

## Future Composability
One of the major benefits of creating a standardized platform for digital identity and attestations is that it enables future composability. This means that different attestations can be combined and used together to provide more powerful and contextualized identity solutions.

As more entities make attestations and contribute to an individual's digital identity, the identity becomes more powerful and useful. Individuals can use their digital identity to authenticate themselves to different services and applications, while organizations can use the identity to make more informed decisions about their customers or employees.

Creating a standardized and decentralized platform for digital identity and attestations is a complex task, but the potential benefits are immense. By providing a common framework for creating and verifying attestations, we can enable a more trustworthy and interoperable digital world.
