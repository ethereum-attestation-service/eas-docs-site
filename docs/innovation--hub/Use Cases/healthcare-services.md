---
sidebar_position: 6
---

# Verified User Access to Healthcare Services

## Problem
Access to healthcare services often requires the verification of personal and medical information, such as a user's identity, medical history, and insurance coverage. Traditional methods of verification, such as paper records and manual processes, can be slow, error-prone, and vulnerable to fraud and data breaches.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a user's personal and medical information. With EAS, healthcare providers can request and verify attested claims about a user's identity, medical history, and insurance coverage, providing a secure and transparent way to verify their eligibility for healthcare services.

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