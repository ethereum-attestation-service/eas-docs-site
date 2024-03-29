---
sidebar_position: 2
---

# Digital Credentials

## Problem
The current digital credentialing and badge building platforms in both Web3 and Web2 create fragmentation in the ecosystem, as there is no unified base layer for attestations. Each platform has its own method of credentialing, which leads to a complex and confusing landscape for developers and users alike. Additionally, current credentialing systems can be vulnerable to fraud and inaccuracies, leading to a lack of trust in the credentials themselves.

## Opportunity
EAS provides a base layer for digital credentials, allowing anyone to create or integrate credentials with ease. EAS's flexible schemas can be used to create credentials of any type and have them issued on or off-chain, while ensuring the authenticity, non-transferability, revocability, expirability, immutability, transparency, composability, versatility, interoperability, and batchability of each attestation.

Attestations can be used to verify a wide range of information, such as identity, employment history, academic achievements, financial data, and roles and authorizations. The use of attestations provides a more secure and trusted way to verify information, leading to increased trust in the credentials themselves and the organizations issuing them. The value of the attestation comes from the attestor, not the schema or the badge.

## Example
A dev completes a certificate course in Advanced Solidity from a reputable school. The school issues an attestation to the dev's wallet, verifying that they have completed the course and have a deep understanding of Solidity. The attestation is recorded on-chain ensuring its immutability and authenticity. By having this attestation tied to their digital identity, the dev can easily share their verified credentials with potential employers or other parties without having to go through time-consuming and unreliable verification processes.

### Sample Schema
```jsx
bytes32 courseID
string courseName
uint64 completionDate
```

Every attestation made with the EAS contracts will include the following:
- UID - the autogenerated unique universal identifier that’s a hash of the attestation
- Timestamp - when it was created
- Attester - who made the attestation
- Recipient - the address the attestation was about (if relevant)
- Attestation data - the information of the attestation
- Reference UID - the UID of the related attestation (if any)
- Expiration time (optional) - the time the attestation expires
- Revocation time (optional) - the status and date if attestation was revoked
- Resolver - an optional contract that can be triggered from the schema once the attestation is made

EAS provides a flexible and powerful framework for creating digital credentials that can be W3C compliant but also future-proof and efficient. With EAS, you can create customizable schemas that reflect your unique use case, and even explore new standards around digital credentials that are more suited to blockchain-based solutions.

## Getting Started
To start using EAS, simply install the SDK, create your own schema, and begin issuing and verifying credentials. The SDK handles all the heavy lifting, so you can focus on building your application. We also have extensive documentation and resources to help you along the way.

### Wanting to read a bit more? 
- Check out our recent article [The Future of Verifiable Credentials: Beyond ERC-721 & SBTs](https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF/K63khDZank5wrfzCulDq5R6dfN2m4zGanO5lsAxfg-w)