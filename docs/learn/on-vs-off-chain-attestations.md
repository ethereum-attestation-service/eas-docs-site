---
sidebar_position: 5
---

# Onchain vs Offchain
Attestations can be made onchain or offchain. **Onchain attestations** are stored directly on the Ethereum, while **offchain attestations** are stored outside of the blockchain, often in a decentralized storage solution like IPFS or just in the browser as a URL hash. Almost anything that can be done onchain can be done offchain. Let's explore the differences:

 ![On vs offchain](./img/on-off-v1.png)


## Onchain Attestations
Onchain attestations are published on the blockchain for the world to see, which means that they have a guaranteed timestamp and can be easily referenced and verified by smart contracts on the blockchain. This creates greater transparency and security compared to offchain attestations. Some potential use cases for onchain attestations include:

- Oracles
- Reputation systems
- Identity verification
- Proof of X
- KYC validation for decentralized finance (DeFi) (ex. passedKyc)
- Verifiable credentials for education or professional qualifications
- Alternatives or enhancements to SBTs
- 2 factor authentication offchain for dapps
- + more

While onchain attestations are highly secure and can be easily referenced and verified, they are also publicly accessible and may not be suitable for storing sensitive information.

## Offchain Attestations
Offchain attestations are not stored directly on the blockchain, but they still carry all the necessary attestation data and digital signature to verify and validate their authenticity. They can be either public or private, giving users more control over the visibility of the attestation. Some potential use cases for offchain attestations include:

- Ticketing
- Driver's licenses
- Passports
- Document verification
- Notary services
- Voting
- Social media messages

Offchain attestations offer more privacy and flexibility as they are not stored on a blockchain, which can be useful for sensitive or personal information that needs to be kept private. However, this also means that they do not require consensus from the ETH network, which can result in a lower level of security. This can make it more difficult to establish trust and credibility, as there is less assurance that the attestation has been thoroughly reviewed and agreed upon by a decentralized network.

The timestamp of offchain attestations cannot be guaranteed in the same way as onchain attestations. However, offchain attestations can be easily timestamped onchain. This is possible by timestamping the offchain UID onchain giving it a verfiable timestamp proving that the attestation was not made after a period in time. 

## Comparing Costs
One of the key factors to consider when choosing between onchain and offchain attestations is the cost associated with each approach. Onchain attestations require Ethereum gas fees for storing the data on the blockchain. These fees can vary depending on the network congestion and the size of the data being stored. Storing large amounts of data onchain can become expensive, making offchain attestations more cost-effective in certain scenarios.

Offchain attestations, on the other hand, do not require gas fees to store the data. Instead, they rely on alternative storage solutions like IPFS or browser-based hashes. These solutions can be more affordable and scalable compared to onchain attestations, especially when dealing with large amounts of data or frequent updates.

## Privacy Considerations
When handling private data, the decision of onchain vs. offchain is crucial:

- **Offchain:** Generally preferable for confidentiality as no data is publicly visible unless explicitly stored in places like IPFS.
- **Private Data Attestations:** An innovative solution to attest nearly an infinite amount of private data by attesting its [merkle root onchain](/docs/tutorials/private-data-attestations.md).
- **Onchain Adaptations:** Rather than placing the entire data on why something was true, one could attest to results, such as a true/false field of the verification. 
- **Leverage ZKP:** Generate a zero-knowledge proof from the attestation data to keep information private and trustworthy. 
- **Bottom Line:** Prioritize privacy. Whether you're storing a verification process or the verification result, sensitive data management is paramount.

## Scalability & Performance
Another aspect to consider when choosing between onchain and offchain attestations is the impact on the performance and scalability of your project. Onchain attestations can contribute to network congestion, which may lead to slower transaction times and increased gas fees. If your use case involves a high volume of attestations, this could create bottlenecks and negatively impact user experience.

Offchain attestations, by contrast, do not have the same impact on network performance. They are stored separately from the blockchain, allowing for faster processing times and improved scalability. This makes offchain attestations a more suitable choice for projects that require high throughput or need to accommodate a large number of attestations.

## Verifiability and Interoperability
When it comes to verifying and sharing attestations, both onchain and offchain attestations can be validated through digital signatures. However, onchain attestations offer the added benefit of being directly linked to the blockchain, making them easily accessible and verifiable by smart contracts and other decentralized applications.

Offchain attestations can still be verified, but the process may require additional steps and tools. In some cases, users may need to share the offchain attestation data and digital signature manually, which can be less convenient and more prone to human error.

In terms of interoperability, both onchain and offchain attestations can be integrated with other platforms and systems. EAS provides a flexible and open platform for creating and verifying attestations, allowing for seamless integration with various identity solutions and decentralized applications.

## Choosing the right solution
It's important to carefully consider the specific needs and goals of your project when deciding between onchain and offchain attestations. Onchain attestations are stored directly on the blockchain, making them highly secure and transparent. However, they may not be the best choice for storing sensitive information unless the data stored in the attestation record has been properly encrypted or provided through ZKPs. Offchain attestations offer more privacy and flexibility, but they may not have the same level of security as onchain attestations. It's important to carefully weigh the pros and cons of each option to determine which one is the best fit for your project.
