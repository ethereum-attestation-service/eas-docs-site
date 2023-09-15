---
sidebar_position: 3
---

# Fetching Data with EAS

EAS provides multiple methods to fetch attestation and schema data. Depending on your use case and technical proficiency, you can choose the method that best suits your needs.

## 1. GraphQL API
EAS offers a GraphQL API that allows developers to query data in a flexible and efficient manner. With GraphQL, you can request specific fields you need, and get a predictable result.

### Available Endpoints:
| Chain  | GraphQL endpoint                                                                                   |
| ------------ |----------------------------------------------------------------------------------------------------|
| Ethereum | [https://easscan.org/graphql](https://easscan.org/graphql)                                         |
| Arbitrum | [https://arbitrum.easscan.org/graphql](https://arbitrum.easscan.org/graphql)                       |
| Optimism | [https://optimism.easscan.org/graphql](https://optimism.easscan.org/graphql)                |
| Linea | [https://linea.easscan.org/graphql](https://linea.easscan.org/graphql)                |
| Sepolia | [https://sepolia.easscan.org/graphql](https://sepolia.easscan.org/graphql)                         |
| Optimism-Goerli | [https://optimism-goerli-bedrock.easscan.org/graphql](https://optimism-goerli-bedrock.easscan.org/graphql) |
| Base-Goerli | [https://base-goerli.easscan.org/graphql](https://base-goerli.easscan.org/graphql)                 |


**Read More:** [**EAS GraphQL API**](#)

## 2. Using the EAS SDK
The EAS SDK simplifies the process of fetching data from EAS. It provides easy-to-use functions to interact with EAS data.

### Get an Attestation
The `getAttestation` function allows you to retrieve an onchain attestation for a given `UID`. This function returns an attestation object containing information about the attestation, such as the schema, recipient, attester, and more.

Explore this code [**directly on GitHub**](https://github.com/ethereum-attestation-service/eas-sdk#getting-an-attestation).

#### Usage
```javascript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

const uid = "0xff08bbf3d3e6e0992fc70ab9b9370416be59e87897c3d42b20549901d2cccc3e";

const attestation = await eas.getAttestation(uid);

console.log(attestation);
```

#### Output
The `getAttestation` function returns an attestation object with the following properties:
- **uid:** The unique identifier of the attestation.
- **schema:** The schema identifier associated with the attestation.
- **refUID:** The reference UID of the attestation, if any.
- **time:** The Unix timestamp when the attestation was created.
- **expirationTime:** The Unix timestamp when the attestation expires (0 for no expiration).
- **revocationTime:** The Unix timestamp when the attestation was revoked, if applicable.
- **recipient:** The Ethereum address of the recipient of the attestation.
- **attester:** The Ethereum address of the attester who created the attestation.
- **revocable:** A boolean indicating whether the attestation is revocable or not.
- **data:** The attestation data in bytes format.

#### Example Output
```javascript
{
    uid: '0x5134f511e0533f997e569dac711952dde21daf14b316f3cce23835defc82c065',
    schema: '0x27d06e3659317e9a4f8154d1e849eb53d43d91fb4f219884d1684f86d797804a',
    refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
    time: 1671219600,
    expirationTime: 0,
    revocationTime: 1671219636,
    recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
    attester: '0x1e3de6aE412cA218FD2ae3379750388D414532dc',
    revocable: true,
    data: '0x0000000000000000000000000000000000000000000000000000000000000000'
}
```


### Get a Schema
To retrieve the schema information for a specific schema `UID`, you can use the `getSchema` function provided by [**the EAS SDK**](https://github.com/ethereum-attestation-service/eas-sdk#getting-schema-information). Here's an example:
```javascript
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";

const schemaRegistryContractAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; // Sepolia 0.26
const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);
schemaRegistry.connect(provider);

const schemaUID = "0xYourSchemaUID";

const schemaRecord = await schemaRegistry.getSchema({ uid: schemaUID });

console.log(schemaRecord);

// Example Output
{
  uid: '0xYourSchemaUID',
  schema: 'bytes32 proposalId, bool vote',
  resolver: '0xResolverAddress',
  revocable: true
}
```
In the output, you will receive an object containing the schema UID, the schema string, the resolver address, and a boolean indicating whether the schema is revocable or not.

## Directly Interacting with the Contracts

### EAS.Sol
You can interact directly with the [EAS.sol contract](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol#L377C1-L380C6) using the `getAttestation` function to get the attestation data.

```javascript
    /// @inheritdoc IEAS
    function getAttestation(bytes32 uid) external view returns (Attestation memory) {
        return _db[uid];
    }
```

### SchemaRegistry.sol
If you want to get a Schema by it's `UID`, you can use the `getSchema` function in the [SchemaRegistry.sol](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol#L44C1-L47C6) contract. 
```javascript
    /// @inheritdoc ISchemaRegistry
    function getSchema(bytes32 uid) external view returns (SchemaRecord memory) {
        return _registry[uid];
    }
```

## Wrapping Up
EAS provides a comprehensive suite of tools and methods to fetch data, catering to both novice users and seasoned developers. Whether you're integrating EAS into your application or simply exploring its capabilities, these methods ensure you have the flexibility and power to access the data you need. As the digital landscape evolves, EAS continues to offer robust solutions to meet the diverse needs of its users.

## Need more support?
Feel free to jump into our [**Telegram Channel**](https://t.me/+EcynOr0iFu03MTYx) for dev support. Or send us a direct message on [**Twitter(x)**](https://twitter.com/eas_eth).