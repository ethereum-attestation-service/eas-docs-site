---
sidebar_position: 1
---
# Contracts
Here, you'll find all the contracts currently deployed on the Ethereum ecosystem.

## 🛳️ Deployments
:::tip We have deployed on the following chains:
- Sepolia, Mainnet, Arbitrum One, Optimism Goerli, Base Goerli. 
- Optimism Bedrock and Polygon are up next!
:::

### Ethereum `v0.26`
:::info EAS Deployment
- **Contract:** [0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587](https://etherscan.io/address/0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/mainnet/EAS.json)
:::

:::info Schema Registry
- **Contract:** [0xA7b39296258348C78294F95B872b282326A97BDF](https://etherscan.io/address/0xA7b39296258348C78294F95B872b282326A97BDF)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/mainnet/SchemaRegistry.json)
:::

### Arbitrum One `v0.26`
:::info EAS Deployment
- **Contract:** [0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458](https://arbiscan.io/address/0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/arbitrum-one/EAS.json)
:::

:::info Schema Registry
- **Contract:** [0xA310da9c5B885E7fb3fbA9D66E9Ba6Df512b78eB](https://arbiscan.io/address/0x4dd8b988B64A4052B5f142Af845AA49D2B2cD10D)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/arbitrum-one/SchemaRegistry.json)
:::

### Sepolia Testnet `v0.26`
:::info EAS Deployment
- **Contract:** [0xC2679fBD37d54388Ce493F1DB75320D236e1815e](https://sepolia.etherscan.io/address/0xC2679fBD37d54388Ce493F1DB75320D236e1815e)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/sepolia/EAS.json)
:::

:::info Schema Registry
- **Contract:** [0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0](https://sepolia.etherscan.io/address/0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/sepolia/SchemaRegistry.json)
:::

### Optimism Testnet (Goerli) `v0.27`
:::info EAS Deployment
- **Contract:** [0xC2679fBD37d54388Ce493F1DB75320D236e1815e](https://goerli-optimism.etherscan.io/address/0x1a5650D0EcbCa349DD84bAFa85790E3e6955eb84)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/optimism-goerli/EAS.json)
:::

:::info Schema Registry
- **Contract:** [0x7b24C7f8AF365B4E308b6acb0A7dfc85d034Cb3f](https://goerli-optimism.etherscan.io/address/0x7b24c7f8af365b4e308b6acb0a7dfc85d034cb3f)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/optimism-goerli/SchemaRegistry.json)
:::

### Base (Goerli) `v0.27`
:::info EAS Deployment
- **Contract:** [0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A](https://goerli.basescan.org//address/0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A)
- **Deployment & ABI:** [EAS.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/base-goerli/EAS.json)
:::

:::info Schema Registry
- **Contract:** [0x720c2bA66D19A725143FBf5fDC5b4ADA2742682E](https://goerli.basescan.org//address/0x720c2bA66D19A725143FBf5fDC5b4ADA2742682E)
- **Deployment & ABI:** [SchemaRegistry.json](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/deployments/base-goerli/SchemaRegistry.json)
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








