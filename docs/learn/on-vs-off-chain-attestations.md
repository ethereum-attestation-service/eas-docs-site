---
sidebar_position: 2
---

# On-Chain vs Off-Chain
Attestations can be made on-chain or off-chain. **On-chain attestations** are stored directly on the Ethereum blockchain, while **off-chain attestations** are stored outside of the blockchain, often in a decentralized storage solution like IPFS or just in the browser as a URL hash. Almost anything that can be done on-chain can be done off-chain. Let's explore the differences:

 ![On vs Off-Chain](./img/on-off-v1.png)


## On-Chain Attestations
On-chain attestations are published on the blockchain for the world to see, which means that they have a guaranteed timestamp and can be easily referenced and verified by smart contracts on the blockchain. This creates greater transparency and security compared to off-chain attestations. Some potential use cases for on-chain attestations include:

- Oracles
- Reputation systems
- Identity verification
- Proof of X
- KYC validation for decentralized finance (DeFi) projects with securities
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

## Choosing the right solution
It's important to carefully consider the specific needs and goals of your project when deciding between on-chain and off-chain attestations. On-chain attestations are stored directly on the blockchain, making them highly secure and transparent. However, they may not be the best choice for storing sensitive information unless the data stored in the attestation record has been properly encrypted or provided through ZKPs. Off-chain attestations offer more privacy and flexibility, but they may not have the same level of security as on-chain attestations. It's important to carefully weigh the pros and cons of each option to determine which one is the best fit for your project.
