---
sidebar_position: 13
---

# 🗣️ Making Statements


## Problem
The online world is filled with misinformation and unverified statements, which can undermine the credibility and integrity of the internet as a source of information. It is often difficult to verify the authenticity and accuracy of statements that are made online, and this can lead to the spread of misinformation and harmful content. Traditional methods of verification, such as fact-checking and third-party verification, are often time-consuming and expensive, and can be easily bypassed by those who wish to spread false or misleading information.

## Solution
Ethereum Attestation Service (EAS) allows users to create attested claims about their statements, which are cryptographically signed and added to the blockchain. This provides a secure and verifiable record of the statement and its context, and can help to ensure the accuracy and credibility of the information that is shared online.

## Example
To use EAS for making statements online, a user can create attested claims for each statement they make, which will be cryptographically signed and added to the blockchain.

For example, let's say that Alice is an expert in a particular field and wants to make a statement about a new discovery in her field. She creates an attestation of her statement, which includes the statement itself and her digital signature. This attestation is cryptographically signed and added to the blockchain, where it can be verified by others who are interested in the statement. Other users can also create attested claims that support or refute Alice's statement, and these attested claims can also be added to the blockchain.

Once the statement and any supporting or refuting claims have been added to the blockchain, they can be easily and transparently verified by others. This provides a secure and verifiable record of the statement and its context, and can help to ensure the accuracy and credibility of the information that is shared online.


### Here's a few example ticketing applications that could be built:
1. A **decentralized platform** that allows users to create and verify attested claims about their statements. This platform could be integrated with existing social media and news platforms to provide a secure and transparent way to verify the authenticity and accuracy of statements that are made online.

2. A **mobile app** that allows users to securely store and manage their attested claims using EAS. This app could be used to easily and securely share attested claims with others, enabling more efficient and convenient verification of the statements that are made online.

3. A **smart contract** that automatically verifies the authenticity of attested claims using EAS. This smart contract could be integrated with other decentralized platforms and systems to enable more automated and transparent verification of the statements that are made online.

4. A **verification API** that allows other applications and platforms to easily integrate with EAS and verify the authenticity of attested claims. This API could be used to enable third-party fact-checking and verification services to more easily and transparently verify the statements that are made online.


## Example schema
- `id`: a unique identifier for the attestation, represented as a 256-bit integer
- `statement`: the statement being attested, represented as a string
- `author`: the author of the statement, represented as an Ethereum address
- `timestamp`: the timestamp of the attestation, represented as a Unix timestamp
- `signature`: the digital signature of the author, generated using their Ethereum private key


## Example attestation
``` jsx
{
  "id": 123456,
  "statement": "The new discovery in my field is groundbreaking and will revolutionize the industry.",
  "author": "0x1234abcd...",
  "timestamp": 1623456789,
  "signature": "0x5678efgh..."
}
```

## Example business ideas
1. **TruthCheck**: A social platform that uses EAS to verify and authenticate users' statements, providing a trustworthy space for discussions and debates.
2. **HonestBooth**: A service that allows individuals and organizations to make and verify verified statements, reducing the spread of misinformation and fraud.
3. **FactBlock**: A blockchain-based system that uses EAS to verify and store verified statements, providing a transparent and secure way to fact-check online content.
4. **TruthMeter**: A mobile app that uses EAS to verify users' statements and provide a score based on their accuracy and reliability.
5. **VerifyMe**: A service that allows individuals and organizations to create and verify verified statements, providing a convenient and secure way to authenticate their claims.

## Future composability
The composability of Ethereum Attestation Service (EAS) could enable a wide range of innovative and flexible solutions for verifying the authenticity and accuracy of statements that are made online.

For example, EAS could be used to create and verify multiple types of attestations for statements, such as attested claims about a statement's origin, authenticity, and context. These different types of attestations could be used together in various ways to create a more robust and transparent ecosystem for online statements, with each attestation serving a different purpose and providing a unique layer of trust and transparency.

One potential application of this composability is the use of origin attestations to verify the source of a statement. This could be used to prevent the spread of misinformation and fake news, as users and organizations could create origin attestations for their statements and require that these attestations be present in order for a statement to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the origin attestations and ensure their integrity.

Another potential application of composability is the use of context attestations to provide more information about the context and background of a statement. This could be used to help others better understand the statement and its implications, and could also be used to prevent the misuse or misinterpretation of the statement. For example, a user who makes a statement about a particular event or situation could create a context attestation that provides more information about the event or situation, such as relevant dates, locations, and sources.

Overall, the composability of EAS could lead to a future where online statements are more verifiable, transparent, and trustworthy, and where users have greater control over the information that is shared online. This could help to improve the accuracy and credibility of the internet as a source of information, and could also help to prevent the spread of misinformation and fake news.