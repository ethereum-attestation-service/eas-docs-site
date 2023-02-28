---
sidebar_position: 1
---
# Contracts
Here, you'll find everything you need to get started with building on the EAS platform.

## Prerequisites
Before you start building with EAS, you'll need the following tools and resources:

- A development environment with the [Ethereum](https://ethereum.org/developers/) and [Solidity](https://solidity.readthedocs.io/en/v0.8.0/) tools installed
- Familiarity with [smart contract development](https://ethereum.org/developers/#smart-contract-development)
- Access to an Ethereum testnet or mainnet for deploying your contracts
- The latest version of the [EAS contracts](https://github.com/ethereum-attestation-service/eas-contracts)
- Setting up your development environment

To get started with EAS, you'll need to set up a development environment with the tools mentioned above. If you're new to Ethereum and smart contract development, we recommend following the [Ethereum Developer Guide](https://ethereum.org/developers/) to set up your development environment and learn the basics.

Once you've set up your development environment, you can download the latest version of the EAS contracts from the [GitHub repository](https://github.com/ethereum-attestation-service/eas-contracts).

## Installing the EAS contracts
To install the EAS contracts, run the following command:

``` bash 
yarn install @ethereum-attestation-service/eas-contracts 
```

This will install the EAS contracts and their dependencies, and make them available for use in your project. The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.


## 🛳️ Deployments
:::tip Mainnet Launch Q1-2023
We're making a few final changes and will be launching on Ethereum Mainnet in early 2023.
:::

### Sepolia Testnet `v0.26`
:::info EAS Deployment
- **Contract:** [0xC2679fBD37d54388Ce493F1DB75320D236e1815e](https://sepolia.etherscan.io/address/0xC2679fBD37d54388Ce493F1DB75320D236e1815e)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/sepolia/EAS.json)
:::

:::info SchemaRegistry
- **Contract:** [0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0](https://sepolia.etherscan.io/address/0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/sepolia/SchemaRegistry.json)
:::

### Arbitrum One `v0.26`
:::info EAS Deployment
- **Contract:** [0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458](https://arbiscan.io/address/0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/sepolia/EAS.json)
:::

:::info SchemaRegistry
- **Contract:** [0xA310da9c5B885E7fb3fbA9D66E9Ba6Df512b78eB](https://arbiscan.io/address/0x4dd8b988B64A4052B5f142Af845AA49D2B2cD10D)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/arbitrum-one/SchemaRegistry.json)
:::




## 🧪 Testing

Testing the protocol is possible via multiple approaches:

### Unit Tests
You can run the full test suite via:

```bash
yarn test
```
### Deployment Tests
You can test new deployments (and the health of the network) against a mainnet fork via:

```bash
yarn test:deploy
```
Please make sure to properly configure your Tenderly settings via `.env`.

This will automatically be skipped on an already deployed and configured deployment scripts and will only test the additional changeset resulting by running any new/pending deployment scripts and perform an e2e test against the up to date state. This is especially useful to verify that any future deployments and upgrades, suggested by the DAO, work correctly and preserve the integrity of the system.


### Test Coverage
You can test new deployments (and the health of the network) against a mainnet fork via:

**Latest Test Coverage Report (2023-01-26)**
100% Statements 207/207
100% Branches 110/110
100% Functions 74/74
100% Lines 333/333

```bash
------------------------------|----------|----------|----------|----------|----------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------------------|----------|----------|----------|----------|----------------|
 contracts/                   |      100 |      100 |      100 |      100 |                |
  EAS.sol                     |      100 |      100 |      100 |      100 |                |
  EIP712Verifier.sol          |      100 |      100 |      100 |      100 |                |
  IEAS.sol                    |      100 |      100 |      100 |      100 |                |
  ISchemaRegistry.sol         |      100 |      100 |      100 |      100 |                |
  SchemaRegistry.sol          |      100 |      100 |      100 |      100 |                |
  Types.sol                   |      100 |      100 |      100 |      100 |                |
 contracts/resolver/          |      100 |      100 |      100 |      100 |                |
  ISchemaResolver.sol         |      100 |      100 |      100 |      100 |                |
  SchemaResolver.sol          |      100 |      100 |      100 |      100 |                |
 contracts/resolver/examples/ |      100 |      100 |      100 |      100 |                |
  AttestationResolver.sol     |      100 |      100 |      100 |      100 |                |
  AttesterResolver.sol        |      100 |      100 |      100 |      100 |                |
  DataResolver.sol            |      100 |      100 |      100 |      100 |                |
  ExpirationTimeResolver.sol  |      100 |      100 |      100 |      100 |                |
  PayingResolver.sol          |      100 |      100 |      100 |      100 |                |
  RecipientResolver.sol       |      100 |      100 |      100 |      100 |                |
  RevocationResolver.sol      |      100 |      100 |      100 |      100 |                |
  TokenResolver.sol           |      100 |      100 |      100 |      100 |                |
  ValueResolver.sol           |      100 |      100 |      100 |      100 |                |
------------------------------|----------|----------|----------|----------|----------------|
All files                     |      100 |      100 |      100 |      100 |                |
------------------------------|----------|----------|----------|----------|----------------|

```
To audit the test coverage of the full test suite, run:

```bash
yarn test:coverage
```

### Profiling
You can profile the gas costs of all of the user-focused flows via:
```bash
yarn test:profile
```

### Deploying
The contracts have built-in support for deployments on different chains and mainnet forks. You can deploy the project by:
```bash
yarn deploy
```
There’s also a special deployment mode which deploys the protocol to a mainnet fork, with additional goodies. It can be run via:
```bash
yarn deploy:fork
```

The framework was inspired and adopted from .

### License
EAS is open source and distributed under the MIT License (see [LICENSE](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/LICENSE)).








