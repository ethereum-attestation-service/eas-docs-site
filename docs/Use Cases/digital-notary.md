---
sidebar_position: 11
---

# Digital Notary

## Problem
Traditional notarization can be a time-consuming and expensive process, often requiring in-person appointments and multiple copies of documents. It can be challenging for individuals and businesses to complete this process quickly and efficiently, especially when working with documents from different regions or countries.

## Opportunity
A digital notary service can provide an innovative solution to this problem by allowing individuals and businesses to notarize documents remotely. By leveraging blockchain-based attestations, users can create immutable and tamper-proof records of their documents, which can be verified instantly by anyone, anywhere in the world.

## Example
John needs to notarize a contract for a business deal with a partner in another country. Instead of flying to the partner's location or hiring a local notary, John uses a digital notary service.

John uploads the contract to the digital notary service, which generates a cryptographic hash of the document and stores it on the blockchain. The digital notary service then issues a timestamped and signed attestation, which confirms the authenticity of the document.

John's partner can then verify the certificate and document hash to ensure that the contract is legitimate and unchanged. This process provides John and his partner with an efficient and secure way to notarize their contract, without the need for in-person appointments or expensive travel.

## Sample Schema
The Digital Notarization schema consists of `documentHash` and `documentID`. The documentHash is a cryptographic hash of the notarized document, which is stored on the blockchain for secure verification. The documentID is a unique identifier associated with the notarized document. This schema provides an efficient and secure way to notarize documents, eliminating the need for physical presence and offering a decentralized alternative to traditional notarization services.

```bash
bytes32 documentHash
bytes32 documentID
```

## Future Composability
As the attestation ecosystem grows, the digital notary service could be integrated into various workflows where document verification is needed. For instance, it could be used in the mortgage and real estate industry to verify the authenticity of property deeds, in the legal industry to validate contracts and agreements, and in the healthcare industry to verify patient consent forms. By leveraging the power of blockchain and cryptographic hashes, the digital notary service can provide a secure and efficient way to verify the authenticity of important documents, saving time and money while reducing the risk of fraud or tampering.


