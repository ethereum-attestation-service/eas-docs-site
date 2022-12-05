---
sidebar_position: 12
---

#  📄 Sign Documents

## Problem
Digital signatures have become an increasingly important part of the way we do business and interact online. However, traditional digital signature systems can be slow, expensive, and vulnerable to fraud and forgery.

## Solution
With EAS, users can create and manage digital signatures for their documents, attesting to the authenticity and integrity of the document using the Ethereum blockchain. These attested signatures can be easily verified by any interested party, providing a secure and transparent way to prove the document's authenticity and integrity.

## Example
Alice is an HR manager at a company who needs to create and sign an employment contract with a new employee, Bob. Using EAS, Alice can create a digital signature for the contract using a UI built on EAS, and then attests to the authenticity and integrity of the contract. This attested signature is then cryptographically signed and added to the blockchain, where it can be easily verified by Bob and others.

Bob can then easily and securely verify the authenticity and integrity of the contract using EAS. This allows Bob to trust that the contract is valid and has not been altered in any way, and also allows Alice to prove that she has signed the contract and is bound by its terms. Additionally, because the attested signature is stored on the Ethereum blockchain, it is transparent and verifiable by anyone who has access to the platform. This provides a secure and immutable record of the contract's authenticity and integrity, ensuring the trustworthiness of the parties involved.

Overall, the use of EAS can improve the digital document signing experience for Alice, Bob, and others by providing a secure and transparent way to create, store, and manage digital signatures, and by enabling others to easily and securely verify these signatures. 

## Example schema
``` bash
string documentName;
bytes32 documentHash;
bytes32 signerAddress;
string signerName;
uint256 signingDate;

```

## Example attestation
```bash 
documentName: "Employment Contract"
documentHash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
signerAddress: 0x1234567890abcdef1234567890abcdef12345678
signerName: "Bob"
signingDate: 1617838098
```

### Here's a few example ticketing applications that could be built:
1. A **decentralized document signing platform** that allows organizations and individuals to create, sign, and verify attested documents using EAS. This platform could be integrated with existing document management systems to provide a secure and transparent way to sign and verify documents, and prevent fraud and tampering.

2. A **mobile app** that allows users to securely store and manage their attested documents using EAS. This app could be used to easily and securely share attested documents with others, enabling more convenient and efficient verification of the documents.

3. A **smart contract** that automatically verifies the authenticity of attested documents using EAS. This smart contract could be integrated with blockchain-based document signing platforms and other systems to enable more automated and transparent verification of document signatures.

4. A **legal document signing service** that uses EAS to securely sign and verify contracts, agreements, and other legal documents. This service could be used by individuals and organizations to manage the signing of legal documents, and provide a secure and transparent way to verify the authenticity of the documents and signatures.

5. A **medical record signing platform** that uses EAS to securely sign and verify medical records and other health-related documents. This platform could be used by healthcare providers and patients to manage the signing of medical documents, and provide a secure and transparent way to verify the authenticity of the documents and signatures.

## Future composability
The future composability of attestations could improve the digital signing process by enabling the creation of attestations about a wide range of information related to the signing process, such as the identity of the signer, the date and time of the signing, and the contents of the signed document. 

These attestations could be composed and linked together in various ways, allowing for more complex and sophisticated verification processes. For example, attestations about the signer's identity could be linked to attestations about their legal authority to sign the document, and attestations about the document's contents could be linked to attestations about its integrity and authenticity. This could provide a more secure and transparent way to verify the validity of digital signatures, and could also help to prevent fraud and identity theft.