---
sidebar_position: 5
---

# Onchain vs Offchain
Attestations can be made either onchain or offchain. While **onchain attestations** are stored directly on the Ethereum blockchain, **offchain attestations** reside outside of it, often in decentralized storage solutions like IPFS or even as URL hashes in browsers. Both methods have their unique advantages, and the choice largely depends on the specific requirements of the use case.

![Onchain vs Offchain](./img/on-off-v1.png)

## What are Onchain and Offchain Attestations?
- **Onchain Attestations:** These are attestations that are stored directly on the Ethereum blockchain. They are immutable and benefit from the security and decentralization of the blockchain. They are great when attestations need to be read by smart contracts or you need guaranteed availability.

- **Offchain Attestations:** These attestations are stored off the Ethereum blockchain, typically in a database or another storage mechanism. They are linked to the blockchain through cryptographic signatures but do not reside on it. Offchain attestations are great when you want to hold the attestation privately and shared on a need to know basis.

## Onchain vs Offchain: At a Glance
| Feature/Aspect                  | Onchain Attestations                                      | Offchain Attestations                                       |
|--------------------------------|----------------------------------------------------------|-------------------------------------------------------------|
| **Authenticity**                | Has the authenticity of a digital signature               | Has the authenticity of a digital signature                 |
| **Interoperability**            | Easily read by smart contracts                            | Requires additional steps for smart contracts               |
| **Storage Location**            | Directly on the blockchain                                | Anywhere you want: Centralized servers, decentralized storage (e.g., IPFS), or browser URL hashes |
| **Visibility**                  | Publicly accessible                                       | Can be public or private                                    |
| **Privacy**                     | Data is public but can be made secure with encryption/ZKPs and other methods | More control over data visibility                           |
| **Cost**                        | Ethereum gas fees, cheaper on L2s                         | Zero gas fees                                               |
| **Immutability**                | Once stored, cannot be altered                            | Data is cryptographically secure but can be deleted if stored off the blockchain |
| **Verification**                | Directly verifiable on the blockchain                     | Requires additional verification steps                      |
| **Security**                    | Secured by blockchain consensus                           | Secured by cryptographic signatures                         |
| **Scalability & Performance**   | Requires onchain transactions to process                  | Faster processing times; can lead to better scalability     |
| **Timestamping**                | Inherent timestamping by the blockchain                   | The UID of the attestation can be timestamped onchain for verifiability |
| **Lifecycle Management**        | Revocations stored onchain                                | Revocations require separate management                     |


## Best Practices
### Onchain Attestations
- **Minimize Data:** Due to cost implications, store minimal data onchain. Consider storing only hashes or references to offchain data. Build in modular ways.
- **Privacy First:** If you must store sensitive data onchain, ensure it's encrypted or hashed. Use privacy best practices.
- **Plan for Gas Fees:** Be aware of potential gas fees, especially during network congestion. Consider layer 2 solutions for reduced fees.

### Offchain Attestations
- **Secure Storage:** Ensure the storage solution, whether centralized or decentralized, is secure and reliable.
- **Data Redundancy:** Store data in multiple locations or use decentralized storage for added redundancy.
- **Easy Retrieval:** Ensure that offchain attestations can be easily retrieved and verified when needed.
- **Timestamp Offchain Onchain:** Timestamp the UID of the offchain attestation onchain to give it a verifiable proof of existence.

## Privacy Considerations
It's important for builders to consider what data needs to go onchain or should live offchain. A common misconception with onchain attestations is that they do not have privacy features. There are several ways to keep onchain attestation data more private. 

- **Offchain:** Generally preferable for confidentiality as no data is publicly visible unless explicitly stored in places like IPFS.
- **Private Data Attestations:** An innovative solution to attest nearly an infinite amount of private data by attesting its [Merkle root onchain](/docs/tutorials/private-data-attestations.md).
- **Onchain Adaptations:** Rather than placing the entire data on why something was true, one could attest to results, such as a true/false field of the verification. 
- **Leverage ZKP:** Generate a zero-knowledge proof from the attestation data to keep information private and trustworthy. 
- **Bottom Line:** Prioritize privacy. Whether you're storing a verification process or the verification result, sensitive data management is paramount.


## Making the Right Choice: Onchain vs. Offchain
Navigating the world of attestations might seem complex, but it boils down to understanding your project's needs and making informed choices. Here's a pragmatic guide to help you decide:

- **Authenticity is a Given:** Both onchain and offchain attestations offer the authenticity of a digital signature. No matter where it's stored, if the data changes, the signature won't verify.
- **Smart Contract Interaction:** If your project requires smart contracts to frequently access or verify attestation data, onchain is your best bet. It ensures that the data is always available on the Ethereum blockchain for smart contracts to interact with.
- **Privacy Matters:** If you're handling sensitive data or want to control who sees what and when, offchain offers more flexibility. Store data privately and share it selectively. But remember, onchain isn't out of the race for privacy. With techniques like private data attestations, you can store a Merkle root onchain and then selectively disclose specific parts of your data when needed.

In short, think about how your data will be used. If it's crucial for smart contracts, onchain might be the way. If it's about privacy and controlled sharing, offchain could be your answer. And sometimes, a blend of both might be the perfect solution. The power to choose is yours.

## Verifiable Data Ledger - a Third Option

Some projects may require the scalability and cost efficiencies that coincide with off-chain attestations in addition to the added security and ease-of-verifiability benefits tied to on-chain transactions. Especially when dealing with a high volume of attestations (or relevant data more generally) at scale, engineering teams often find themselves unnecessarily giving up qualities like global consensus, immutability, and transparency in favor of faster performance and lower cost.

There are, however, additional storage options designed to maximize on both scalability and decentralization, offering a less binary solution suitable for many use-cases, including off-chain attestations. For example, options like the Ceramic Network offer data-streaming and querying capabilities familiar to developers who have worked with Kafka, GraphQL, and relational databases, but built on a fully decentralized and open-source framework built on IPFS content addressing with "roll-up" publishing transactions directly on the Ethereum blockchain. *Learn how to store and retrieve off-chain attestations on Ceramic using ComposeDB in [this tutorial](../tutorials/ceramic-storage).*

It's important for teams to consider the trade-offs between on-chain, off-chain, and non-conforming solutions like Verifiable Data Ledgers, and make the design choices best suited for their unique goals and use-cases. 