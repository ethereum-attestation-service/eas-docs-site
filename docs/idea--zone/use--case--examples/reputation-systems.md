---
sidebar_position: 4
---

# Reputation Systems

## Problem
Reputation systems are an important part of many online platforms and communities, yet they are often limited by centralized and opaque rating systems. Traditional rating systems also make it easy for users to manipulate ratings or game the system. It can be difficult to establish trust in a community where reputation is not easily verifiable or there is no way to accurately measure it.


## Opportunity
Trust is relative, and individuals trust certain entities based on their own context and experiences. With attestations, we can create customizable reputation systems that reflect these varying levels of trust. Attestations allow individuals to determine what types of inputs and factors matter to them when calculating a trust score for an entity.

For example, a person might value attestations from their close friends or family members more highly than attestations from strangers. Alternatively, they might place more value on attestations from verified experts or reputable organizations.

By using attestations to build reputation systems, we can create more robust and verifiable systems that are less prone to fraud and manipulation. These systems can be used for a wide range of applications, such as verifiable reviews, social scores, smart contract reputations, and more. With the flexibility and customization of EAS, the possibilities are endless for creating decentralized reputation systems that accurately reflect an individual's trust and relative context.

Attestations can be used to verify various aspects of reputation, such as:
- Relevant trust scores 
- Skills and expertise
- Work experience and employment history
- Education and credentials
- Social reputation and interactions
- Smart contract reputation

With EAS, these attestations can be recorded on Ethereum or off-chain, providing a secure and tamper-proof record of reputation.

## Example
Alice is a freelancer who wants to establish a strong reputation online. She asks her clients to provide attestations about her work, which can include details about her punctuality, quality of work, and communication skills. Alice also obtains attestations from her school, which validate her skills and knowledge in her field.

The attestations from Alice's clients and school are stored on a blockchain and can be used to calculate Alice's reputation score. Because the attestations are made by trusted sources, they carry more weight and are less prone to fraud and manipulation than self-made endorsements.

Alice's reputation score can be used to help her find new clients, and potential clients can verify her reputation by looking at the attestations from her previous clients and school.


## Sample Schema
```jsx
string clientName
uint8 workQuality 
uint8 communicationSkills 
uint8 punctuality
uint8 valueOfWork 
bool recommend
```
- `clientName` (string): The name of the client who is providing the attestation.
- `workQuality` (uint8): A score between 1-100 indicating the quality of the freelancer's work.
- `communicationSkills` (uint8): A score between 1-100 indicating the freelancer's communication skills.
- `punctuality` (uint8): A score between 1-100 indicating the freelancer's punctuality.
- `valueOfWork` (uint8): A score between 1-100 indicating the value of the freelancer's work.
- `recommend` (bool): A boolean indicating whether or not the client would recommend the freelancer.

## Future Composability 
By using attestations and building trust scores, we can unlock many new use cases for digital trust online. Reputation systems can help to rethink and evolve traditional big brother systems like credit scores and background checks. With attestations, people can have a more transparent and verifiable reputation that is built on trust rather than relying on centralized authorities. This opens up new possibilities for social scoring, peer-to-peer lending, decentralized marketplaces, and more. By building a web of trust, we can create more honest and secure digital interactions that empower individuals and communities. This has the potential to be a truly revolutionary shift in the way we build digital trust.
