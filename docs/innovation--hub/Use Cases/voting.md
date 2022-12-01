---
sidebar_position: 6
---

# Voter ID and Eligibility 🗳️

## Problem
In order to ensure the integrity and transparency of voting systems, it is important to verify the identity and eligibility of voters. Traditional methods of verification, such as paper-based voter registration and manual processes for checking voter eligibility, can be slow, error-prone, and vulnerable to fraud and manipulation.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a voter's identity and eligibility. With EAS, election officials can request and verify attested claims about a voter's identity, residence, and citizenship, providing a secure and transparent way to verify their eligibility to vote.

## Example 
Alice is a voter who needs to verify her eligibility to vote in an upcoming election. Using EAS, Alice can create an attested claim about her identity and eligibility, which includes information such as her name, date of birth, and proof of citizenship.

Alice can then share this attested claim with the election officials, who can easily and securely verify her eligibility using the EAS platform. This allows the officials to quickly and accurately confirm Alice's eligibility to vote, without the need for manual verification or paper documents.

Additionally, because the attested claim is stored on the Ethereum blockchain, it is transparent and verifiable by anyone who has access to the platform. This provides a secure and immutable record of the voter's eligibility, ensuring the integrity of the election and the trustworthiness of the parties involved.

## Example schema
```name, dateOfBirth, proofOfCitizenship```

## Example attestation
[Sample attestation]

## Future composability
In the future, the composability of Ethereum Attestation Service (EAS) with other decentralized technologies could enable more advanced and flexible solutions for verified voter identification and eligibility.

For example, EAS could be integrated with decentralized storage systems, such as IPFS (InterPlanetary File System), to enable voters to securely store and manage their own attested claims about their identity and eligibility. This would allow voters to easily and securely share their attested claims with election officials, enabling more convenient and efficient verification of their eligibility to vote.

Additionally, EAS could be integrated with smart contracts and blockchain-based voting systems to enable more automated and transparent verification of a voter's eligibility. For example, a smart contract could be used to automatically verify a voter's attested claims and determine their eligibility to vote in a specific election. This could be used to enable more efficient and secure voting, while also providing a transparent and verifiable record of the voter's eligibility.

## Example way to build a voting system 
Ethereum Attestation Service (EAS) can help to reduce the risk of voter fraud in elections by providing a decentralized and secure solution for verifying the identity and eligibility of voters. With EAS, election officials can request and verify attested claims about a voter's identity, residence, and citizenship, providing a transparent and verifiable way to ensure that only eligible voters are able to participate in the election.

To launch a voting system using EAS, the first steps would be to:

1. Define the schema for the attested claims that will be used to verify a voter's identity and eligibility. This would typically include information such as the voter's name, date of birth, address, and citizenship.

2. Create a decentralized identity (DID) for each voter, which will be used to securely store and manage their attested claims. This can be done using a DID provider, such as uPort or Civic, or by creating a custom DID solution.

3. Develop the system for requesting and verifying attested claims about a voter's identity and eligibility. This could involve the use of smart contracts and other decentralized technologies to automate the verification process and ensure its integrity and transparency.

4. Test the system and refine it based on the results of the testing. This would involve conducting pilot elections and gathering feedback from election officials and voters to ensure that the system is user-friendly and effective.

Overall, the process of launching a voting system using EAS would involve the development and implementation of a decentralized and secure solution for verifying voter identity and eligibility. This would enable more transparent and secure elections, while also providing a verifiable and immutable record of the voting process.