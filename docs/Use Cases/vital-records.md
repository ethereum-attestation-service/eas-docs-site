---
sidebar_position: 16
---
# Vital Records

## Problem
Obtaining a copy of a birth certificate can be a long and inefficient process. Often, individuals need to visit a vital records office in person, mail in an application, or wait weeks for the document to arrive by mail. This process can be frustrating and time-consuming, especially in urgent situations.

In addition, paper-based records can be prone to fraud and errors, leading to long-term risks and challenges for individuals and governments alike. Moreover, paper-based systems are not privacy-preserving, and sensitive information such as the mother's maiden name, home address, and social security number can be exposed.

## Opportunity
Attestations, together with privacy-preserving technologies like zk or merkle trees, can provide a secure and efficient solution for vital records, such as birth certificates. By recording birth certificates on Ethereum, individuals can easily access and share their official documents in a matter of minutes, rather than weeks, while keeping their sensitive information private.

Attestation-based vital records also reduce the risk of fraud and errors, as the immutability of blockchain ensures that records cannot be tampered with or altered.

## Example
A parent wants to enroll their child in a school, but the school requires a copy of the child's birth certificate. In the traditional paper-based system, the parent needs to visit the vital records office, present their ID, fill out an application, and wait weeks for the document to arrive by mail. This process is inefficient and cumbersome.

With attestations and privacy-preserving technologies, the parent can access their child's birth certificate in a matter of minutes, without revealing any sensitive information. The parent can simply provide the school with a digitally signed attestation from the government, which confirms the authenticity of the birth certificate and the identity of the child.

## Taking a Privacy First Approach
:::danger Developers must take a privacy-first approach
:::
EAS does not presuppose which privacy-preserving technology is best for any use case. However, the privacy of individuals must be a top priority. 

EAS also allows users to create [Private Data Attestations](/docs/tutorials/private-data-attestations). `Private Data Attestations` take advantage of Merkle Trees' unique capabilities to selectively disclose specific data fields without compromising overall privacy. This innovative feature allows users to create attestations with a single "private data" field, which contains the hash of a Merkle tree root. As a result, users can securely store and share particular parts of their attested data while preserving their privacy.

Attestations with `Zero Knowledge Proofs` are another path forward to explore. 

## Sample Schema
```jsx
bytes32 birthCertificateID
bytes32 firstName
bytes32 lastName
uint256 dateOfBirth
```

## Future Composability
The attestation-based birth certificate registry can be extended to include other types of vital records such as marriage certificates, death certificates, and divorce decrees. Additionally, the system can be integrated with other privacy-preserving systems, such as healthcare records or educational records, to provide a more comprehensive view of an individual's vital information while preserving their privacy. This composability enables governments to create a more secure, efficient, and privacy-preserving system of vital records management.