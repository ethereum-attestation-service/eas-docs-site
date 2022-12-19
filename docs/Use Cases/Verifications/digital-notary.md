---
sidebar_position: 8
---
# Digital Notarization Services 
Ethereum Attestation Service (EAS) could be used to create a digital notarization system, allowing individuals and businesses to securely and easily verify the authenticity of documents.

## Problem
Traditional notarization processes can be time-consuming, costly, and inconvenient, requiring individuals to physically visit a notary and provide physical documentation. This can be a barrier for individuals who need to have documents notarized but are unable to do so easily due to location, availability, or other factors.

## Solution
EAS provides a decentralized solution for making attestations about the authenticity of digital documents. With EAS, individuals can easily create and verify digital notarizations, providing a convenient and secure way to verify the authenticity of their documents.

## Example
One way that attestations could be used is by creating an attestation schema that defines the data fields and types that are relevant to digital notarization, such as the document's hash, the date and time of notarization, and the signature of the notary.

Individuals or organizations who need to notarize a digital document could use the attestation service to create an attestation with this schema and provide the necessary data. The attestation could be cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of the notarization.

When the notarized document is needed, the owner could use the attestation service to verify the attestation and check the data contained in it against the data on the blockchain. This process could help to quickly and efficiently verify the authenticity of the document and provide evidence of its notarization.

## Example schema
``` bash
bytes32 documentHash;
bytes32 notarySignature;
bytes32 notaryPublicKey;
uint256 notarizationTime;
```

## Example attestation
```bash
documentHash: "0xabcd1234"
notarySignature: "0x1234abcd"
notaryPublicKey: "0x1234abcd"
notarizationTime: 1623456789
```

# Example application ideas
1. **NotarizeNow** - a user-friendly app that allows individuals to easily create and verify digital notarizations on their mobile devices.
2. **eNotary** - a web-based platform that connects individuals with licensed notaries and enables the creation and verification of digital notarizations.
3. **SecureDocs** - a document management system that integrates with EAS to enable secure storage and sharing of digitally notarized documents.
4. **SmartNotarization** - a smart contract platform that automates the verification of digital notarizations and enforces the terms of contracts.
5. **NotarizeIt** - a simple and intuitive tool that allows individuals and businesses to easily create and verify digital notarizations.
6. **eNotarize** - a decentralized marketplace that connects individuals and businesses with licensed notaries and enables the creation and verification of digital notarizations.
7. **NotarizeHub** - a community platform that connects individuals and businesses looking to create and verify digital notarizations with licensed notaries and other relevant service providers.
8. **DocuSignature** - a digital signature and notarization service that integrates with EAS to enable secure and verifiable online signing and notarization of documents.
9. **NotarizeChain** - a blockchain-based notarization platform that allows individuals and businesses to create and verify secure and verifiable digital notarizations.
10. **NotaryNet** - a decentralized network of licensed notaries that enables the creation and verification of digital notarizations for individuals and businesses.



## Future composability
In the future, the composability and interoperability of Ethereum Attestation Service (EAS) could enable more advanced and flexible solutions for digital notarization.

For example, EAS could be integrated with decentralized storage systems, such as IPFS (InterPlanetary File System), to enable individuals to securely store and manage their attested notarizations. This would allow individuals to easily and securely share their attested notarizations with others, enabling more convenient and efficient verification of the authenticity of their documents.

Additionally, EAS could be integrated with smart contracts and blockchain-based contract management systems to enable more automated and transparent verification of a document's notarization. For example, a smart contract could be used to automatically verify a document's notarization and determine its authenticity, providing a secure and verifiable way to enforce the terms of a contract.

In the future, the composability and interoperability of EAS could enable more advanced and flexible solutions for digital notarization, such as the integration with decentralized storage systems and smart contracts for automated verification.