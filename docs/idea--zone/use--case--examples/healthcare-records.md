---
sidebar_position: 17
---
# Healthcare Records

## Problem
One of the main issues with healthcare records is the lack of interoperability between Electronic Health Record (EHR) systems. This can result in delays in treatment, duplication of efforts, and increased healthcare costs. In addition, healthcare records contain highly sensitive personal information that must be kept secure and private.

## Opportunity
Blockchain technology can provide a secure and private solution for healthcare records. By using zero-knowledge proofs and attestations, individuals can selectively disclose their personal information to healthcare providers without revealing their entire medical history. This ensures privacy and security for sensitive health data.

Attestation-based healthcare records can also improve interoperability by creating a decentralized system where healthcare providers can access patient records instantly, no matter where they are located.

## Example
A patient visits their healthcare provider and receives a diagnosis. The provider creates an attestation on the patient's healthcare record using private data attestations to ensure that only the necessary information is disclosed. The patient can then selectively disclose their healthcare records to other healthcare providers as needed, ensuring privacy and security for their personal information.

Attestation-based healthcare records can also be used to track medication adherence, enabling healthcare providers to monitor patient compliance with medication regimens and make adjustments as needed. This can improve patient outcomes and reduce healthcare costs.

## Taking a Privacy First Approach
:::danger Developers must take a privacy-first approach
:::
EAS does not presuppose which privacy-preserving technology is best for any use case. However, the privacy of individuals must be a top priority. 

EAS also allows users to create [Private Data Attestations](/docs/tutorials/private-data-attestations). `Private Data Attestations` take advantage of Merkle trees' unique capabilities to selectively disclose specific data fields without compromising overall privacy. This innovative feature allows users to create attestations with a single "private data" field, which contains the hash of a Merkle tree root. As a result, users can securely store and share particular parts of their attested data while preserving their privacy.

Attestations with `Zero Knowledge Proofs` are another path forward to explore. 


## Sample Schema

```jsx
bytes32 patientID
bytes32 diagnosis
uint64 dateOfTreatment
bytes32 evidenceHash
```

## Future Composability
The attestations-based healthcare record system can be extended to include other types of health data, such as medical images, lab results, and medication histories. Additionally, the system can be integrated with other blockchain-based systems, such as medical billing and insurance, to provide a more comprehensive view of an individual's healthcare information. This composability enables healthcare providers to create a more secure, efficient, and interconnected system of healthcare management.