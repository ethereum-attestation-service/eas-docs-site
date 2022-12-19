---
sidebar_position: 10
---

# Reputation Systems 

## Problem
In today's digital world, trust and reputation are increasingly important for individuals, businesses, and organizations to establish and maintain. Traditional methods of building trust and reputation, such as personal relationships and word-of-mouth referrals, can be slow and limited in scope. Online, trust and reputation are often based on subjective and unverifiable information, such as online reviews and social media posts, which can be manipulated and unreliable.

## Solution
EAS provides a decentralized solution for securely creating, storing, and verifying attestations about an individual's, business's, or organization's trust and reputation. With EAS, anyone can create and verify attestations about their trustworthiness and reputation, providing a secure and transparent way to establish and maintain trust and reputation online.

## Example
Imagine a network of individuals who want to create a more transparent and trustworthy reputation system. Each member of the network can create and verify attestations about the trustworthiness of others in the network, using a schema that includes information such as the individual's level of trustworthiness, the number of attestations made about them, and any comments or feedback from other members of the network.

The network could then use this information to create a reputation score for each individual, based on the number and quality of the attestations made about them. This score could be used to determine an individual's level of trust and reputation within the network, and could be displayed on the network's website or app, or integrated with existing online reputation platforms.

Additionally, the network could use EAS to create and verify attestations about its own trustworthiness and reputation, such as its commitment to transparency, privacy, and security. This could provide members of the network with more detailed and transparent information about the network, enabling them to make more informed decisions about their participation and engagement in the network.

## Example schema

``` bash
bytes32 userID;
bytes32 attesterID;
uint256 trustScore;
uint256 timestamp;

```

## Example attestation
``` bash
userID: 0x1234567890abcdef1234567890abcdef12345678
attesterID: 0xabcdef1234567890abcdef1234567890abcdef12
trustScore: 7
timestamp: 1546300800

```
## Example business ideas
1. **TrustyBiz** - a reputation network for businesses to verify their trustworthiness and credibility. TrustyBiz solves the problem of consumers not knowing who to trust in the marketplace.
2. **Accreditr** - a platform for professionals and businesses to showcase their verified credentials and expertise to potential clients and customers.
3. **Vouch** - a peer-to-peer recommendation network that connects individuals with trusted service providers in their local communities.
4. **ReferMe** - a marketplace for businesses to exchange and purchase high-quality referrals from other trusted companies.
5. **RepX** - a reputation network for verifying the quality and reliability of products and services. RepX solves the problem of consumers not knowing if a product or service is worth their time and money.



## Future composability
In the future, the composability of EAS with other decentralized reputation systems could enable more advanced and flexible solutions for trust and reputation verification.

For example, a decentralized reputation system could be integrated with EAS to allow users to attest to the trustworthiness of other users and relationships. This could enable users to create a more complete and verifiable picture of their trustworthiness, as attested to by multiple sources.

Additionally, EAS could be integrated with blockchain-based reputation platforms to enable more transparent and secure management of trust and reputation. For example, a smart contract could be used to automatically verify and update attestations about an individual's, business's, or organization's trust and reputation, based on their online activities and interactions. This could be used to create more efficient and secure trust and reputation systems, while also providing a transparent and verifiable record of the information.

Overall, the future composability of EAS for trust and reputation systems online could unlock a wide range of possibilities for establishing and maintaining trust and reputation online, enabling more secure, efficient, and transparent solutions for verifying and managing this important information. This could ultimately benefit individuals, businesses, and organizations.