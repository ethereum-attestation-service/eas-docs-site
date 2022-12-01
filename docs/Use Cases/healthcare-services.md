---
sidebar_position: 6
---

# 🏥 Access to Healthcare Services 

## Problem
Access to healthcare services often requires the verification of personal and medical information, such as a user's identity, medical history, and insurance coverage. Traditional methods of verification, such as paper records and manual processes, can be slow, error-prone, and vulnerable to fraud and data breaches.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a user's personal and medical information. With EAS, healthcare providers can request and verify attested claims about a user's identity, medical history, and insurance coverage, providing a secure and transparent way to verify their eligibility for healthcare services.

## Example
Alice is a patient who is receiving healthcare services from a hospital. She has several medical conditions, allergies, and immunizations, and wants to make sure her healthcare providers have accurate and up-to-date information about her medical record. She uses Ethereum Attestation Service (EAS) (or a front-end UI powered by EAS) to create an attestation with a schema that defines the data fields and types relevant to her medical record, such as medical conditions, medications, allergies, and immunizations.

Alice uses the attestation service to create an attestation with this schema and provides the necessary data, such as her medical conditions, medications, allergies, and immunizations. The attestation is cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of Alice's medical information.

When Alice visits the hospital, she presents her attestation to the healthcare provider, who uses the attestation service to verify the attestation and access the data contained in it. This helps the provider to quickly and accurately obtain Alice's medical information, which they can use to provide her with the appropriate healthcare services.


## Example schema

```bash 
{
  "name": "string",
  "birthDate": "bytes32",
  "medicalHistory": ["string"],
  "insurance": ["provider": "string",
    "policyNumber": "string"]
  }
}
```

## Future composability
EAS allows for the creation of attested claims about a wide range of healthcare-related information, such as medical conditions, treatments, and prescriptions. These claims can be composed and verified in combination with other attested claims to provide a comprehensive view of a user's healthcare information.

In the future, EAS could also be integrated with other decentralized healthcare solutions, such as blockchain-based electronic health records and telemedicine platforms, to provide a more interoperable and transparent solution for verified user access to healthcare services. This would enable healthcare providers to more easily and securely access and verify a user's personal and medical information, enabling more efficient and effective healthcare delivery.