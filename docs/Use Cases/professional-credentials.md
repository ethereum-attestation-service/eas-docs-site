---
sidebar_position: 14
---

#  🧑‍🎓 Professional credentials

## Problem
Verifying the authenticity of an individual's educational and professional credentials can be challenging, and is often reliant on manual processes and third-party certifications. This can be time-consuming and prone to errors, and can also create barriers to the trust and transparency that are essential for the credibility of credentials.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about the credentials of individuals. With EAS, individuals and organizations can create and verify attested claims about an individual's qualifications and credentials, providing a secure and transparent way to verify their authenticity.

## Example
Alice is a recent graduate who is looking for a job in the financial industry. To demonstrate her qualifications to potential employers, Alice creates an attested claim about her degree using the EAS platform. This claim includes information such as the degree awarded, the major and minor subjects, the date of graduation, and the name of the university.

Alice can then share this attested claim with potential employers, who can easily and securely verify the authenticity of her credentials using the EAS platform. This provides employers with a high degree of confidence in Alice's qualifications, and enables them to make informed decisions about hiring her.

Additionally, because the attested claim is stored on the Ethereum blockchain, it is transparent and verifiable by anyone who has access to the platform. This provides a secure and immutable record of an individual's credentials, ensuring the integrity of the credentialing process and the trustworthiness of the parties involved.

## Example schema 
```
bytes32 name;
bytes32 degree;
bytes32 major;
bytes32 minor;
bytes32 institution;
uint256 graduationYear;
bytes32 transcriptHash;

```

## Example attestation
```
name: "Alice"
degree: "Bachelor of Science in Computer Science"
major: "Computer Science"
minor: "Mathematics"
institution: "University of California, Berkeley"
graduationYear: 2018
transcriptHash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef

```

## Example business ideas
1. **CertChain** - A decentralized platform that allows professionals to securely store and manage their credentials and certifications on the blockchain, enabling them to easily share their verified credentials with employers and clients.

2. **CredCheck** - A digital credentialing service that uses EAS to verify the authenticity of professional credentials and certifications, providing a convenient and reliable way for employers to verify the qualifications of job applicants.

3. **CertSpot** - A marketplace for professional certifications, where individuals can earn and showcase their verified credentials to potential employers and clients.

4. **ProveIt** - A web-based application that uses EAS to verify the authenticity of professional credentials and certifications, providing a convenient and secure way for individuals to prove their qualifications.

5. **CredVerify** - A mobile app that allows individuals to quickly and easily verify the authenticity of their professional credentials and certifications using EAS, enabling them to confidently share their verified credentials with employers and clients.

## Future composability
In the future, the composability of EAS with other decentralized credential verification solutions could enable more advanced and flexible solutions for verifying the credentials of individuals.

For example, a blockchain-based reputation system could be used to automatically record the achievements and experiences of individuals, providing a transparent and verifiable record of their professional history. This reputation system could be integrated with EAS to allow individuals and organizations to attest to claims about the credentials and qualifications of individuals, providing a more complete view of their credentials.

Additionally, EAS could be integrated with decentralized storage systems, such as IPFS (InterPlanetary File System), to enable individuals and organizations to securely store and manage their attested claims in a decentralized and transparent way. This would allow for the creation of a decentralized and verifiable record of an individual's credentials, enabling employers and regulators to easily verify the authenticity and quality of the individual's qualifications.

Overall, the future composability of EAS with other decentralized credential verification solutions has the potential to enable more transparent, verifiable, and efficient solutions for verifying the credentials of individuals.