---
sidebar_position: 13
---

# Making Statements


## Problem
The online world is filled with misinformation and unverified statements, which can undermine the credibility and integrity of the internet as a source of information. It is often difficult to verify the authenticity and accuracy of statements that are made online, and this can lead to the spread of misinformation and harmful content. Traditional methods of verification, such as fact-checking and third-party verification, are often time-consuming and expensive, and can be easily bypassed by those who wish to spread false or misleading information.

## Solution
Ethereum Attestation Service (EAS) allows users to create attestations about their statements, which are cryptographically signed and added to the blockchain. This provides a secure and verifiable record of the statement and its context, and can help to ensure the accuracy and credibility of the information that is shared online.

## Example
Alice is an online commentator who wants to use EAS to make statements about her ideas and opinions. She creates attested statements using EAS and then publishes them on her blog or social media accounts. These attested statements are then cryptographically signed and added to the blockchain, where they can be easily verified by others.

Alice's attested statements can be easily verified by anyone using EAS. For example, her readers can use EAS to verify the authenticity of her statements, ensuring that they are reading the real Alice and not an imposter. This can help to improve the trustworthiness and credibility of Alice's statements, and can also enable new features and services that require verified statements.

## Example schema
```bash 
string statement;
bytes32 date;
string source;
string topic;
```

## Example attestation
``` jsx
statement: "The best way to reduce carbon emissions is to switch to renewable energy sources"
date: "12/05/2022"
source: "Alice's Blog"
topic: "Environment"

```

## Example business ideas
1. **TruthCheck**: A social platform that uses EAS to verify and authenticate users' statements, providing a trustworthy space for discussions and debates.
2. **HonestBooth**: A service that allows individuals and organizations to make and verify verified statements, reducing the spread of misinformation and fraud.
3. **FactBlock**: A blockchain-based system that uses EAS to verify and store verified statements, providing a transparent and secure way to fact-check online content.
4. **TruthMeter**: A mobile app that uses EAS to verify users' statements and provide a score based on their accuracy and reliability.
5. **StatementProof** - A service that uses EAS to provide a transparent and verifiable record of statements made online, enabling users to easily check the accuracy and credibility of information.

## Future composability
The use of EAS can enable new and innovative use cases, such as verified user profiles, content moderation, and community governance. For example, users who have verified their identity and statements using EAS could have a verified badge on their profile, indicating that their statements have been attested and verified on the Ethereum blockchain. This could help to improve the quality and trustworthiness of content and interactions on the internet, and could also enable new features and services that require verified user statements.

One potential application of this composability is the use of origin attestations to verify the source of a statement. This could be used to prevent the spread of misinformation and fake news, as users and organizations could create origin attestations for their statements and require that these attestations be present in order for a statement to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the origin attestations and ensure their integrity.

Context attestations can be made to provide more information about the context and background of a statement. This could be used to help others better understand the statement and its implications, and could also be used to prevent the misuse or misinterpretation of the statement. For example, a user who makes a statement about a particular event or situation could create a context attestation that provides more information about the event or situation, such as relevant dates, locations, and sources.

Overall, the composability of EAS could lead to a future where online statements are more verifiable, transparent, and trustworthy, and where users have greater control over the information that is shared online. This could help to improve the accuracy and credibility of the internet as a source of information, and could also help to prevent the spread of misinformation and fake news.