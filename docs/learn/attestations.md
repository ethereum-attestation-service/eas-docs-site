---
sidebar_position: 2
---

# What are Attestations 

:::info What are attestations?
**Attestations** /ˌaˌteˈstāSH(ə)n; are statements or evidence of information made by anyone about anything.  
:::

![Attestations Concept](./img/attestations-concept-2.png)

Attestations are a digital records cryptographically signed that something exists or is the case. They can be made by anyone to attest to the identity, credentials, or other information of individuals, organizations, and other entities. This can be useful for a wide range of applications, such as proving ownership, verifying credit scores, or verifying the trustworthiness of an individual or entity.

The **value of an attestation** comes from the person or entity making the statement. If the statement is about something important, like whether someone has a good credit score, then the attestation is only valuable if it comes from a reliable source, like one of the credit score providers. If the attestation just comes from the person who wants a loan or lease, it's not as valuable.

Ethereum Attestation Service (EAS) is a protocol for registering, verifying, and revoking attestations on the Ethereum blockchain.

### Why Attestations Matter
Attestations are important because they provide a way to establish trust and credibility in the digital world. In the absence of physical presence or direct interaction, it can be difficult to know whether information is accurate or reliable. Attestations provide a third-party endorsement and cryptographically signed proof of the validity of a piece of information, making it easier for others to trust and rely on that information.

### Comparison to DIDs, Verifiable Credentials, and Other Solutions
There are a number of technologies and solutions that are related to or overlap with attestations, including Decentralized Identifiers (DIDs) and Verifiable Credentials. At their core, these are just types of attestations for a specific use case. Here is a brief comparison of these technologies:

- **Decentralized Identifiers (DIDs):** DIDs are a type of digital identifier that are decentralized and self-sovereign, meaning they are not controlled by any single entity and can be owned and managed by the individual or organization that holds them. DIDs are often used in conjunction with attestations, as they provide a way to identify the issuer or subject of an attestation.

- **Verifiable Credentials:** Verifiable Credentials are a type of digital credential that can be cryptographically verified as authentic. They are often used to represent educational or professional qualifications, as well as other types of identity information. Verifiable Credentials are built on top of DIDs and can be used in conjunction with attestations to provide a more robust and secure way of verifying credentials.

- **Other Solutions:** There are a number of other technologies and solutions that are related to or overlap with attestations, including Self-Sovereign Identity (SSI) frameworks, Identity Hubs, and Identity Wallets. These solutions provide different approaches to managing and verifying identity information, and may be used in conjunction with attestations to provide additional security and functionality.

### 🙌 Examples of Attestations

Attestations happen all around us, every time we need to prove our or someone else's:
- identity (who they are),
- credentials (their skills & credibility),
- ownership (what they own),
- credit score (their financial status),
- vote (who they trust to represent them),
- nationality (where they are from),
- eligibility (what they have access to),
- reputation (how people perceive them).

Here are a few examples of situations where you might experience attestations at play:
- liking a Twitter post on the internet,
- reviewing a restaurant or product online,
- using your personal ID to prove who you are,
- proving your ownership of your car or home,
- accessing a building with a keycard,
- buying tickets to your favorite concert or event,
- applying for a job or a mortgage,
- voting in your local community group or presidential election,
- verifying someone is trustworthy or not,
- claiming you have a set of skills.
and the list goes on...

### ✅ Attestation use case examples:
Take a look at our [**Use Cases Docs**](/docs/category/use-cases) for some inspiration on what EAS can solve for. 

- [** 🆔 Digital Identities**](/docs/category/use-cases) - verifying where your goods are sourced and manfuactured from every step of the way
- [** 📦 Proof of provenance**](/docs/category/use-cases) - know and trace the origin of all manufactured goods (clothes, food, and more).
- [** 🎟️ Ticketing**](/docs/category/use-cases) - issue tickets and enter events without the need for centralized services.
- [** 🤗 Trust Scores**](/docs/category/use-cases) - verify the trustworthiness of new and exisiting relationships.
- [** 💰 Proof of Reserves**](/docs/category/use-cases) - easily verify if a company has proper reserves on their balance sheet.
- [** 🐦 Twitter Verifications**](/docs/category/use-cases) - verify your social voice is that of your own without the need for blue checkmarks.
- [** 🔮 Prediction Markets**](/docs/category/use-cases) - attest to real world outcomes and find new ways to earn.
- [** 👶 Vital Records**](/docs/category/use-cases) - easily and privately share proof of your birth certificates, healthcare records, and more.
- [** 💵 Undercollateralized lending**](/docs/category/use-cases) - issue and recieve undercollateralized loans.
- [** 🙌 Transparent labor markets**](/docs/category/use-cases) - remove biases and increase transparency in labor workforces.
- [** 🗳️ Voting**](/docs/category/use-cases) - cast your votes on-chain for presidential or local elections with transparency and simplicity.
- [** 📃 Notary**](/docs/category/use-cases) - The role of a notary becomes obsolete.

The opportunities are endless. Anytime you need to trust & verify is a time when attestations and EAS can work for you.


## On & Off-Chain Attestations

Attestations can be either on-chain or off-chain, depending on whether they are published on the blockchain or not. On-chain attestations are transparent and can be easily verified, while off-chain attestations are not as transparent and may require additional steps to verify. In this section, we will discuss the differences between on-chain and off-chain attestations in more detail.

### 🔗 On-Chain Attestations 

An on-chain attestation is an attestation, or statement, that is published on the blockchain for the world to see. This means that its timestamp can be guaranteed, and any smart contract on the blockchain can easily reference and verify the attestation. On-chain attestations can be used for things like oracles, reputation, and KYC validation for DeFi with securities. 

**On-chain attestations** in Web3 are often called decentralized identifiers (DIDs), verifications, claims, proofs, and badges. 

While each of the existing providers adds unique use cases, they ultimately are not primitive enough to enable long-term, sustainable, and composable growth. Below are a few examples of on-chain attestation builders that could register their schemas with EAS for greater long-term growth.

- Gitcoin Passport
- Proof of Humanity
- Sismo
- Layer 3
- Galxe
- POAP
- Disco
- Lens
- Polygon ID

And more …


### 🔓 Off-Chain Attestations 

An off-chain attestation is an attestation that is not stored in the blockchain. An off-chain attestation can be public or private. Off-chain attestations carry the entire attestation data and digital signature required to verify and validate the authenticity of itself. Off-chain attestations can be used for things like ticketing, drivers licenses, passports, votes, and tweets. Almost anything that can be done on-chain can be done off-chain, but you can't retain privacy as well on-chain.

We’re exposed to off-chain attestations all the time. Some of the most popular examples of off-chain attestations that can be recorded with EAS and are:

- Identification cards
- Your passport
- Your vote
- Vital records like birth certificates
- Healthcare records
- Tickets to events
- Social posts (tweets)
- Land registries & titles
- Document signatures
- 2-factor authentication
- Car titles
- Mortgages
- Credit scores
And more …

