---
sidebar_position: 6
---

# 🏥 Access to Healthcare Services 

## Problem
Access to healthcare services can be difficult for many people, especially for those who live in rural or underserved areas, or for those who lack the necessary identification or insurance. This can lead to delays in treatment, increased healthcare costs, and poorer health outcomes for individuals and communities.

## Solution
Ethereum Attestation Service (EAS) can provide a decentralized solution for securely storing and verifying claims about an individual's healthcare history and eligibility for services. With EAS, healthcare providers can create and verify attestations of an individual's health information, insurance coverage, and eligibility for services. This provides a secure and transparent way to verify an individual's access to healthcare services, and can help to improve the efficiency and effectiveness of the healthcare system.

## Example
Alice is a patient who is receiving healthcare services from a hospital. She has several medical conditions, allergies, and immunizations, and wants to make sure her healthcare providers have accurate and up-to-date information about her medical record. She uses Ethereum Attestation Service (EAS) (or a front-end UI powered by EAS) to create an attestation with a schema that defines the data fields and types relevant to her medical record, such as medical conditions, medications, allergies, and immunizations.

Alice uses the attestation service to create an attestation with this schema and provides the necessary data, such as her medical conditions, medications, allergies, and immunizations. The attestation is cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of Alice's medical information.

When Alice visits the hospital, she presents her attestation to the healthcare provider, who uses the attestation service to verify the attestation and access the data contained in it. This helps the provider to quickly and accurately obtain Alice's medical information, which they can use to provide her with the appropriate healthcare services.

In addition, the hospital can use the attestation service to add its own attestation to Alice's medical record, providing further verification and evidence of the care she has received. This can help to ensure the accuracy and completeness of Alice's medical record, and can make it easier for other healthcare providers to access and use the information in the future.

## Example schema

``` bash
{
  "name": "string",
  "dob": "uint256",
  "medicalConditions": "string",
  "medications": "string",
  "allergies": "string",
  "immunizations": "string"
}

```

## Example attestation

```bash 
{
  "id": "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385",
  "schemaId": "0x27fcbb36a8cf97f7b1f18bef6c2f28bbb337a2a1",
  "issuer": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
  "data": {
    "medicalConditions": ["diabetes", "asthma"],
    "medications": ["insulin", "albuterol"],
    "allergies": ["peanuts", "penicillin"],
    "immunizations": ["influenza", "tetanus"]
  },
  "signature": "0x8f928faefabe6d6dd70f986a8da5c979135c2af9..."
}

```

## Future composability

EAS allows for the creation of attested claims about a wide range of healthcare-related information, such as medical conditions, treatments, and prescriptions. These claims can be composed and verified in combination with other attested claims to provide a comprehensive view of a user's healthcare information.

The use of EAS for healthcare record management can provide several benefits. It can help to ensure the accuracy and completeness of a patient's medical record, making it easier for healthcare providers to provide the appropriate care. It can also provide a secure and verifiable record of a patient's medical information, which can be accessed by authorized healthcare providers. This can help to prevent errors and improve the quality of healthcare services.

In the future, EAS could also be integrated with other decentralized healthcare solutions, such as blockchain-based electronic health records and telemedicine platforms, to provide a more interoperable and transparent solution for verified user access to healthcare services. This would enable healthcare providers to more easily and securely access and verify a user's personal and medical information, enabling more efficient and effective healthcare delivery.