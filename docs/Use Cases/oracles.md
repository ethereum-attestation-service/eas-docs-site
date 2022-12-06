---
sidebar_position: 18
---
# 🔮 Oracles

## Problem
Oracles are essential for enabling smart contracts to access and use real-world data from financial markets. However, the security and reliability of oracles is a critical concern, as the integrity of the data that oracles provide directly affects the security and reliability of the smart contracts that use it.

## Solution
EAS provides a decentralized solution for securely creating, storing, and verifying attestations of the integrity of the data that oracles provide to smart contracts. With EAS, oracles can create and sign attestations that provide a cryptographically secure and verifiable record of the data they are providing to a smart contract.

This attestation can be used by the smart contract to verify the integrity of the data and ensure that it has not been tampered with. This can help to increase the security and reliability of the smart contracts that use data from oracles, providing a more transparent and trustless way to access financial market data.

## Example
One way that attestations could be used is by creating an attestation schema that defines the data fields and types that are relevant to financial market data, such as stock prices, exchange rates, and interest rates.

An oracle that provides data from financial markets could then use the attestation service to create an attestation with this schema and provide the necessary data. The attestation could be cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of the oracle's data.

When the smart contract requests data from the oracle, it could include the attestation along with the data. The smart contract could then use the attestation service to verify the attestation and check the data contained in it against the data on the blockchain. This process could help the smart contract to quickly and efficiently verify the integrity of the data and use it with confidence.

## Example schema
``` bash
bytes32 stockTicker;
uint256 stockPrice;
bytes32 currencyID;
uint256 exchangeRate;

```

## Example attestation
```bash
stockName: "ACME Corporation"
stockPrice: 200
currencyName: "US Dollar"
exchangeRate: 1
```

# Example business ideas
1. **DataTrust** - A decentralized platform that uses EAS to provide secure and transparent attestation of the integrity of data from oracles. DataTrust enables users to easily verify the reliability and trustworthiness of oracle data.
2. **SecureOracle** - A fintech company that uses EAS to provide secure and verifiable attestation of the data that it provides to smart contracts. SecureOracle offers a wide range of financial market data, including stock prices, exchange rates, and interest rates. This helps to increase the security and reliability of the smart contracts that use SecureOracle's data, providing a more transparent and trustless way to access financial market data.
3. **SmartMarket** - A decentralized prediction market platform that uses EAS to provide secure and transparent attestation of the data that oracles provide to its smart contracts. SmartMarket enables users to create and trade on predictions about a wide range of events, including financial markets, sports, and politics. This helps to increase the security and trust of the prediction market and enables users to make more informed and confident predictions.
4. **SafeTrade** - A decentralized insurance platform that uses EAS to provide secure and transparent attestation of the data that oracles provide to its smart contracts. SafeTrade enables users to create and trade on insurance policies for a wide range of risks, including natural disasters, financial markets, and health. This helps to increase the security and trust of the insurance market and enables users to create and trade on insurance policies with confidence.
5. **VeriData** - A decentralized data marketplace that uses EAS to provide secure and transparent attestation of the data that users provide to the platform. VeriData enables users to buy and sell a wide range of data, including financial market data, weather data, and social media data. This helps to increase the trust and value of the data on the platform, enabling users to confidently buy and sell data with verifiable provenance.


## Future composability
The composability of different attestation schemas on EAS allows for the creation of complex and powerful verification solutions. In the case of oracle data, different attestation schemas can be composed together to create a more comprehensive and reliable verification process.

For instance, an attestation schema could be created to verify the identity and credentials of an oracle provider. Another schema could be created to verify the integrity and reliability of the data that the oracle provides. These two schemas could then be composed together to create a comprehensive attestation of the oracle provider and their data.

Over time, more schemas can be added to the composition to create even more comprehensive and reliable verification processes. For example, additional schemas could be added to verify the oracle provider's reputation, track their performance over time, or verify the security of their data storage and transmission processes.

By using EAS to compose different attestation schemas, the oracle industry can evolve to become more efficient, transparent, and trustless. This can help increase the reliability and trustworthiness of oracle data and enable more secure and confident use of oracle data in smart contracts and other decentralized applications.
