---
sidebar_position: 18
---

# Social Graphs

## Problem
Social media networks today are highly fragmented and siloed, with each network building their own proprietary social graph that is incompatible with other networks. This leads to a lack of interoperability between networks, creating barriers for users and developers alike. As a result, users find it difficult to move between networks or use third-party applications that work across multiple networks.

Additionally, many decentralized social graphs in Web3 are built one layer too high, relying on centralized communities and data that is not interoperable outside of the social graph. This results in a further fragmentation of innovation, with developers having to create applications that are specific to each social graph, rather than creating solutions that work across different graphs.

Too often are social graphs constrained to social media type of applications. We can extend the value of the social graphs to be much more than that if they are truly interoperable with Web2 and Web3 ecosystems.

## Opportunity
Using EAS as the base layer for social graphs enables the creation of truly decentralized and interoperable social networks. Attestations provide a way for users to securely and selectively share their data with others, while retaining control over their personal information.

By using attestations, users can prove their identity, skills, achievements, and other aspects of their digital lives without revealing sensitive information. Off-chain attestations can be used for messaging, reactions, and other forms of user-generated content, while on-chain attestations can provide transparency and immutability for critical aspects of the social graph, such as user identity and activity.

Using EAS as a common platform for social graph development eliminates the fragmentation and siloing that is prevalent in Web2 social networks. Devs can build social apps and services that work across different networks, while users can move seamlessly between different social graphs with their data and attestations intact. 

A social graph built on attestations can enable a wide range of use cases, from secure and private messaging to reputation systems, decentralized job boards, and more. With EAS, it is possible to build a social network that truly puts users in control of their data and activity, empowering them to create and participate in a more open, transparent, and interconnected Web3 ecosystem.

## Example
Tweets can easily be added to a social graph network by using off-chain attestations. Recall that each attestation made with EAS has an attestor address, timestamp, revocation status, optional recipient, referenced attestations, attestation data, and authenticity of the signature.

All the schema would need for a decentralized social graph for "Twitter" would be a string for tweeting. Once the attestation (tweet) is made, then users could "retweet" it by simply referencing the attestation UID and republishing it. Any type of reaction comments like a 'like', would also just be a form of attestation. 

### Sample Schema
```
string tweet
```

## Future Composability
One of the major benefits of creating a standardized platform for social graph development with attestations is that it enables future composability. Different attestations can be combined and used together to provide more powerful and contextualized social solutions.

As more entities make attestations and contribute to a social graph, the graph becomes more powerful and useful. Users can use their digital identity to authenticate themselves to different services and applications, while organizations can use the identity to make more informed decisions about their customers or employees.

Creating a standardized and decentralized platform for social graphs with attestations is a complex task, but the potential benefits are immense. By providing a common framework for creating and verifying attestations, we can enable a more trustworthy and interoperable social network, enabling a new generation of innovative and unique social applications.
