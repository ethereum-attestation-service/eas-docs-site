---
sidebar_position: 14
---

# Prediction Markets

## Problem
Prediction markets rely on accurate and timely information to function properly. However, many current prediction markets struggle with issues such as inaccurate data sources, low liquidity, and lack of transparency.

## Opportunity
Using attestations, prediction markets can provide a decentralized source of truth for real-world outcomes. Attestations can be used to verify the accuracy of data sources and ensure transparency in decentralized market operations.

## Example
A prediction market allows users to bet on the outcome of a future event, such as a political election or a sporting event. The market operates by allowing users to buy and sell shares in the possible outcomes, with the price of each share representing the probability of that outcome occurring.

To ensure the accuracy of the market, attestations can be used to verify the real-world outcome of the event. For example, if the prediction market is focused on a political election, an attestation can be made by a trusted third-party to confirm the actual outcome of the election.

This attestation provides a decentralized source of truth for the market, ensuring that the outcome is accurate and transparent. It also provides an opportunity for users to stake their tokens on the outcome, incentivizing accurate reporting and increasing liquidity in the market.

## Sample Schema
In this schema, the marketID identifies the specific prediction market, while the outcomeID corresponds to the outcome being predicted, such as which team won the game. The outcomeValue indicates the actual outcome and is used to attest to the result of the real-world event.

```bash jsx
bytes32 marketID
bytes32 outcomeID
uint256 outcomeValue
```

## Future Composability
With attestations, prediction markets can become more reliable and trustworthy. Participants can attest to the accuracy of the data used in the prediction market, providing a source of truth for the ecosystem. As the ecosystem grows, attestations can also be used to create new market incentives for individuals to participate and provide real-world data.

Moreover, oracle services can use attestations to obtain accurate data from multiple sources, creating a more decentralized and reliable system for prediction markets. By combining attestations with other types of attestations, such as off-chain oracles, prediction markets can be expanded to incorporate novel data sources and create new markets

