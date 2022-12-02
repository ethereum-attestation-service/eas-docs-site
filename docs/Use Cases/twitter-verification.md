---
sidebar_position: 7
---

# 🐦 Twitter Verification

## Problem
Twitter account ownership can be difficult to verify, making it vulnerable to identity theft and spam. Traditional methods of verification, such as email and phone number verification, can be easily faked or hacked, making it difficult to ensure the authenticity of a Twitter account. This can lead to the spread of misinformation and harmful content, and can undermine the credibility and integrity of Twitter as a platform.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a Twitter account's ownership. With EAS, Twitter users can create attested claims about their identity, which can then be verified by Twitter and other users. This provides a secure and transparent way to verify the ownership of a Twitter account, and can help to prevent identity theft and spam.

## Example
Alice wants to verify her Twitter account @alice, so she creates a digital identity on the blockchain using EAS. She then creates an attestation of her identity, which includes her name, email, and Twitter handle. This attestation is cryptographically signed and added to the blockchain, where it can be verified by Twitter and other users.

Bob, a trusted entity that is responsible for verifying the identity of Twitter users, receives a request from Twitter to verify Alice's attestation. Bob uses EAS to verify the attestation, checking that it is properly signed and that the information it contains matches Alice's known identity. If the attestation is valid, Bob signs it with his own cryptographic key, adding his own attestation to the blockchain.

Twitter, which is also a trusted entity in this system, receives Bob's attestation and uses EAS to verify it. If the attestation is valid, Twitter grants Alice the verified badge on her Twitter account, indicating that her identity has been verified. Alice can now use her verified account to share information and interact with other users on Twitter, knowing that her identity has been verified and that her account is authentic.

## Example schema 
[Sample schema]

## Example attestation
[Sample attestation]


## Future composability
In the future, the composability of Ethereum Attestation Service (EAS) with other decentralized technologies could enable more advanced and flexible solutions for verified Twitter account ownership.

For example, EAS could be integrated with decentralized identity (DID) solutions to enable Twitter users to securely and verifiably prove their ownership of their accounts. This would involve the creation of a DID for each Twitter user, which would be used to store and manage their attested claims about their identity. This would allow users to easily and securely share their attested claims with Twitter, enabling more efficient and transparent verification of their account ownership.

Additionally, EAS could be integrated with smart contracts and decentralized storage systems, such as IPFS, to enable more automated and transparent verification of a Twitter user's identity. For example, a smart contract could be used to automatically verify a user's attested claims and determine their eligibility for verified badges and other perks on Twitter. This could be used to enable more efficient and secure verification of Twitter account ownership, while also providing a transparent and verifiable record of the verification process.

## You could start building something like this by

1. Define the schema for the attested claims that will be used to verify a user's identity and ownership of their Twitter account. This would typically include information such as the user's name, email, and Twitter handle.

2. Create a decentralized identifier (DID) for each Twitter user, which will be used to securely store and manage their attested claims. This can be done using a DID provider, or by creating a custom DID solution using EAS schemas.

3. Develop the system for requesting and verifying attested claims about a user's identity and ownership of their Twitter account. This could involve the use of smart contracts and other decentralized technologies to automate the verification process and ensure its integrity and transparency.

4. Test the system and refine it based on the results of the testing. This would involve conducting pilot verifications and gathering feedback from Twitter users and administrators to ensure that the system is user-friendly and effective.