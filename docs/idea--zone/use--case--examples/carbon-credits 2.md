---
sidebar_position: 21
---
# Carbon Credits

## Problem
Carbon credits are a key tool for reducing greenhouse gas emissions, as they provide an economic incentive for businesses to reduce their carbon footprint. However, the carbon credits market has faced significant challenges due to a lack of transparency and accountability in the issuance and trading of carbon credits. This has led to concerns about the reliability and effectiveness of the market, and has hindered the adoption of carbon credits as a viable tool for reducing greenhouse gas emissions.

## Opportunity
The use of attestations in carbon credits provides a more transparent and trustworthy market. It enables greater compliance and proof of proper issuance of carbon credits. By using attestations, it is possible to create an immutable record of carbon credit issuance, transfer, and retirement, ensuring that each carbon credit has a clear and transparent history. This leads to a more trustworthy and decentralized carbon credits market.

## Example
Let's say that a company wants to issue carbon credits for reducing their greenhouse gas emissions. They can use attestations to provide proof of their emissions reductions by having an independent third-party auditor attest to their emissions data. This attestation can then be added to the blockchain, creating an immutable record of the company's emissions reductions.

When the carbon credits are sold on a decentralized marketplace, each credit can be represented by an attestation that includes information about the issuer, the date of issuance, and the emissions reduction that the credit represents. Buyers of the credits can then verify the authenticity of the credits by checking the attestations on the blockchain.


## Sample Schema
This is an example carbon credit being attested to. It would come from a carbon credit authority address and be issued to the beneficiary address of the carbon credit. It would include a value of the carbon credits issued, the date it was issued, and a hash of the evidence provided.

```jsx
uint256 carbonCredits
uint64 issuanceDate
bytes32[] evidenceHash
```

## Future Composability
As more organizations adopt attestations for carbon credits issuance and trading, it will become possible to create a more interconnected and efficient carbon credits market. By standardizing the schema for carbon credit attestations, it will be possible to create a decentralized carbon credits market that spans multiple issuers and trading platforms. This will enable greater liquidity and transparency in the market, and make it easier for organizations to participate in the market and achieve their emissions reduction goals.