---
sidebar_position: 13
---

# Oracles

## Problem
Decentralized applications (dapps) require accurate and timely real-world data to function correctly. However, fetching and verifying this data on-chain can be slow and expensive. Existing oracle services are often controlled by centralized teams, which can be a single point of failure and compromise the integrity of the data.

## Opportunity
Attestations can provide a decentralized and efficient way to obtain accurate real-world data for blockchain-based applications. By using a designated group of oracle providers, each attesting to the authenticity of the data they provide, these attestations can ensure accountability for data quality. 

## Example
An insurance dapp needs to verify that a specific event, such as a flight delay or cancellation, has occurred before paying out a claim. The dapp can use an off-chain oracle to obtain the necessary data.

The oracle service provider is designated to provide flight data for specific airlines. When a flight delay occurs, the airline notifies the oracle, which verifies the delay and attests to the authenticity of the data by providing an attestation.

The insurance dApp can then use the attestation to trigger a payout to the policyholder, who receives the funds in their wallet. This process provides an efficient way to verify the authenticity of real-world data without the need for the dApp to go through a time-consuming and costly verification process.

## Sample Schema

```jsx
uint32 flightNumber,
uint64 departureTime,
bytes32 airline,
bool isDelayed
```

## Future Composability
Oracle attestations can be combined with other types of attestations to create more complex workflows. For example, a supply chain dapp could use oracle attestations to verify the location of goods in transit, while also using attestations to verify the quality of the goods and their provenance. By combining multiple types of attestations, the dapp can create a more robust and secure system for tracking goods and ensuring their quality.

