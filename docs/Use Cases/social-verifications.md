---
sidebar_position: 2
---

# 💬 Social Networks

## Problem
Social networks have become an integral part of our daily lives, but they have also faced challenges related to privacy, security, and trust. Traditional social networks often rely on centralized systems and algorithms to manage user data and interactions, which can lead to data breaches, censorship, and manipulation.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely creating, storing, and verifying attestations to manage user data and interactions on social networks. With EAS, social network owners and users can create and verify attestations about their identity, interests, and relationships, providing a secure and transparent way to manage user data and interactions.


## Example
Alice is a user of a social network that uses EAS to verify users from bots. She creates attestations about her personal information, such as her name, age, and location. She can also create attestations about her content, such as her posts, comments, and likes.

These attestations are cryptographically signed and added to the Ethereum blockchain, where they can be easily verified by others. This provides a secure and transparent way for Alice to manage and share her data on the social network, and also enables others to verify the authenticity and accuracy of this data.

Additionally, Alice can use her digital identity to securely and transparently interact with other users on the social network. For example, she can use her digital identity to authenticate her identity when logging in to the platform, and she can also use it to securely share her personal information and content with others. This can help to improve the security and trustworthiness of digital interactions on the social network.

Furthermore, the use of EAS on the social network can enable new and innovative use cases, such as verified user profiles, content moderation, and community governance. For example, users who have verified their identity and content using EAS could have a verified badge on their profile, indicating that their data has been attested and verified on the Ethereum blockchain. This could help to improve the quality and trustworthiness of the content on the social network, and could also enable new features and services that require verified user data.


## Example schema 
``` bash
string userName;
string profilePicture;
string location;
bytes32 birthday;
bool isVerified;
bytes32[] interests;

```

## Example attestation
``` bash
userName: "Alice"
profilePicture: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
location: "San Francisco, CA"
birthday: "01/01/1990"
isVerified: true
interests: ["photography", "cooking", "travel"]

```

## Example applications to start
1. **TweetVerify** - an app that allows users to securely store and verify the authenticity of their Twitter posts using EAS.
2. **LinkedInVerify** - an app that allows users to verify their LinkedIn profile and credentials using EAS, providing employers and recruiters with a more secure and reliable way to verify a candidate's qualifications.
3. **YouVerify** - an app that allows YouTubers to verify the authenticity of their videos and content using EAS, providing viewers with a more trustworthy and reliable way to consume content.

## Future composability
In the future, the composability of EAS with other decentralized solutions could enable more advanced and flexible solutions for improving the trust and security of social networks.

For example, a decentralized reputation system could be used to track and verify users' interactions and contributions on a social network, providing a transparent and verifiable record of their reputation. This reputation system could be integrated with EAS to allow users to attest their reputation, providing a more complete view of their trustworthiness and credibility.



