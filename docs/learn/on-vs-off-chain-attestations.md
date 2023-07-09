---
sidebar_position: 5
---

# On-Chain vs Off-Chain
Attestations can be made on-chain or off-chain. **On-chain attestations** are stored directly on Ethereum, while **off-chain attestations** are stored outside of the blockchain, often in a decentralized storage solution like IPFS or just in the browser as a URL hash. Almost anything that can be done on-chain can be done off-chain. Let's explore the differences:

 ![On vs Off-Chain](./img/on-off-v1.png)


## On-Chain Attestations
On-chain attestations are published on the blockchain for the world to see, which means that they have a guaranteed timestamp and can be easily referenced and verified by smart contracts on the blockchain. This creates greater transparency and security compared to off-chain attestations. Some potential use cases for on-chain attestations include:

- Oracles
- Reputation systems
- Identity verification
- Proof of X
- KYC validation for decentralized finance (DeFi) (ex. passedKyc)
- Verifiable credentials for education or professional qualifications
- Alternatives or enhancements to SBTs
- 2 factor authentication off-chain for dapps
- + more

While on-chain attestations are highly secure and can be easily referenced and verified, they are also publicly accessible and may not be suitable for storing sensitive information.

## Off-Chain Attestations
Off-chain attestations are not stored directly on the blockchain, but they still carry all the necessary attestation data and digital signature to verify and validate their authenticity. They can be either public or private, giving users more control over the visibility of the attestation. Some potential use cases for off-chain attestations include:

- Ticketing
- Driver's licenses
- Passports
- Document verification
- Notary services
- Voting
- Social media messages

Off-chain attestations offer more privacy and flexibility as they are not stored on a blockchain, which can be useful for sensitive or personal information that needs to be kept private. However, this also means that they do not require consensus from the ETH network, which can result in a lower level of security. This can make it more difficult to establish trust and credibility, as there is less assurance that the attestation has been thoroughly reviewed and agreed upon by a decentralized network.

The timestamp of off-chain attestations cannot be guaranteed in the same way as on-chain attestations. However, off-chain attestations can be easily timestamped on-chain. This is possible by timestamping the off-chain UID on-chain giving it an verfiable timestamp proving that the attestation was not made after a period in time. 

## Comparing Costs
One of the key factors to consider when choosing between on-chain and off-chain attestations is the cost associated with each approach. On-chain attestations require Ethereum gas fees for storing the data on the blockchain. These fees can vary depending on the network congestion and the size of the data being stored. Storing large amounts of data on-chain can become expensive, making off-chain attestations more cost-effective in certain scenarios.

Off-chain attestations, on the other hand, do not require gas fees to store the data. Instead, they rely on alternative storage solutions like IPFS or browser-based hashes. These solutions can be more affordable and scalable compared to on-chain attestations, especially when dealing with large amounts of data or frequent updates.

## Scalability & Performance
Another aspect to consider when choosing between on-chain and off-chain attestations is the impact on the performance and scalability of your project. On-chain attestations can contribute to network congestion, which may lead to slower transaction times and increased gas fees. If your use case involves a high volume of attestations, this could create bottlenecks and negatively impact user experience.

Off-chain attestations, by contrast, do not have the same impact on network performance. They are stored separately from the blockchain, allowing for faster processing times and improved scalability. This makes off-chain attestations a more suitable choice for projects that require high throughput or need to accommodate a large number of attestations.

## Verifiability and Interoperability
When it comes to verifying and sharing attestations, both on-chain and off-chain attestations can be validated through digital signatures. However, on-chain attestations offer the added benefit of being directly linked to the blockchain, making them easily accessible and verifiable by smart contracts and other decentralized applications.

Off-chain attestations can still be verified, but the process may require additional steps and tools. In some cases, users may need to share the off-chain attestation data and digital signature manually, which can be less convenient and more prone to human error.

In terms of interoperability, both on-chain and off-chain attestations can be integrated with other platforms and systems. EAS provides a flexible and open platform for creating and verifying attestations, allowing for seamless integration with various identity solutions and decentralized applications.

## Choosing the right solution
It's important to carefully consider the specific needs and goals of your project when deciding between on-chain and off-chain attestations. On-chain attestations are stored directly on the blockchain, making them highly secure and transparent. However, they may not be the best choice for storing sensitive information unless the data stored in the attestation record has been properly encrypted or provided through ZKPs. Off-chain attestations offer more privacy and flexibility, but they may not have the same level of security as on-chain attestations. It's important to carefully weigh the pros and cons of each option to determine which one is the best fit for your project.
