---
sidebar_position: 9
---

# Proof of Compliance

## Problem
In highly regulated industries, such as healthcare and finance, proving compliance can be a time-consuming and costly process. There is a need for a more transparent and efficient way to verify compliance without relying on extensive documentation and manual processes.

## Opportunity
With attestations as a form of proof of compliance, companies can create a secure and efficient way to verify compliance with regulatory and industry standards. Companies can create verifiable claims to demonstrate the steps taken to meet compliance requirements, establishing a transparent and auditable record of their compliance efforts. By using attestations, companies can reduce the complexity and costs of compliance audits and increase the efficiency and effectiveness of compliance management.

## Example
Let's take XYZ Corporation, a medical device manufacturer that must comply with FDA and industry regulations to ensure the safety and effectiveness of their products. To demonstrate compliance, XYZ creates off-chain attestations for each step of their process, including product testing, quality control, and documentation. These attestations are signed by responsible parties and kept as an immutable recorded in their private database.

During compliance audits, XYZ can provide the necessary private attestations, eliminating the need for time-consuming and costly manual reviews. The verifiable nature of these attestations builds trust with customers and regulators, improving the company's reputation and credibility in the market.

To prove their compliance with regulatory and industry standards, XYZ can use attestations without the need for extensive documentation. The immutable and transparent nature of these records ensures that compliance efforts are easily verifiable, while reducing the risk of fraud or errors.

For added privacy and security, the final proof of compliance can be an on-chain attestation from the auditors that only shows that compliance was achieved. This would help maintain data privacy while also providing easily verifiable proof of compliance on Ethereum.

## Sample Schema

```jsx
bytes32 regulationId
string standardName
bytes32 stepId
uint64 date
string description
address responsibleParty
```

## Future Composability 
Proof of compliance attestations can be extended to other industries and use cases, such as verifying compliance with environmental regulations, data privacy laws, and financial reporting standards. By creating a decentralized ledger of compliance attestations, we can establish a foundation of trust and transparency for compliance management across all industries.