---
sidebar_position: 20
---

# Licensing
How attestations can be used for credible entities to issue and manage licenses such as a business license, medical license, and more.

## Problem
The current process of issuing and managing licenses, such as a business license, is often slow, cumbersome, and expensive. Traditional licensing systems typically require applicants to fill out lengthy paperwork, submit multiple documents, and wait weeks or months for a decision. The lack of transparency and inefficiency in the process can lead to frustration for applicants and increased costs for licensing authorities.

Moreover, it is difficult for third parties, such as employers or customers, to verify the authenticity of licenses, which can lead to fraud and abuse.

## Opportunity
Attestations can be used to streamline the licensing process and provide more transparency and trust for all parties involved. By using attestations, government entities can issue and manage licenses in a more efficient and secure manner.

For example, applicants can submit their license application through a decentralized application that leverages attestations. The application can use attestations to verify the applicant's identity, qualifications, and other relevant information, allowing the licensing authority to make a more informed decision in a shorter amount of time.

Once the license is issued, the applicant can maintain it as an attestation, and the licensing authority can use attestations to track renewal dates, revocations, and other important information. This provides a more transparent and auditable record of the licensing process.

To verify a license, the relevant parties could simply access the attestation and verify its authenticity. For example, a business owner applying for a permit could present their license attestation to the relevant authority, who could then verify its authenticity and other details using a simple interface.


## Example
Let's say a business owner wants to obtain a license to operate their business in a particular jurisdiction. They would fill out an application on a decentralized application that leverages attestations, providing their personal information, business details, and other relevant information. The application would then use attestations to verify the owner's identity, business registration, tax compliance, and other relevant criteria.

Once the licensing authority approves the application, the license would be issued as an attestation on the blockchain. The business owner would then maintain the license as an attestation, which would be used to track renewals and other important information.

### Sample Schema
This is an example schema that would include a few details about the business name, address, and tax ID. Further it would include a categorized list of license types and the date it was issued. Recall that each attestation always comes with a unique identifier (UID), revocation status, and expiration date if applicable.

```
string businessName
string address
string taxId
uint8 licenseType
uint64 issuedDate
```

## Future Composability
Using attestations for licensing can be extended to other domains as well, such as medical licensing, professional licensing, and more. Attestations can also be used to verify the credentials of individuals and organizations, ensuring that they meet the necessary requirements for a particular license or certification. By creating a more transparent and efficient licensing process, attestations can help to drive innovation and growth in various industries.
