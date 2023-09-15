---
sidebar_position: 7
---

# Using Resolver Contracts
A `Resolver Contract` acts as a hook for a Schema, ensuring that attestations conform to specific rules or any smart contract logic before they can be completed. This feature allows you to introduce additional smart contract functionality to your schema, such as an allowlist of users that can create attestations or minting NFTs when specific conditions are met.

## The Concept
When creating a new Schema, an entity might want to enforce custom logic or rules that the Schema must follow. This can be achieved by adding a resolver contract at the schema level, which ensures that the schema adheres to the desired smart contract logic.

:::warning Finalize your resolver before using it on a schema
You cannot update the resolver address associated with the schema after it has been made. Make sure your resolver is ready before deployment.
:::

### How it Works
You can explore a base resolver contract in the EAS GitHub Repository: 
- **SchemaResolver.sol:** https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/SchemaResolver.sol

The `SchemaResolver.sol` is a base contract that provides a framework for creating custom resolver contracts to validate and process attestations in EAS. This base contract allows for the development of various resolver contracts with custom rules for validating attestations and revocations in a modular and flexible way.

## Example Resolver Contracts
We've created a few resolver contract examples you can explore. These are meant to be used for inspiration. Remember that you can add any resolver contract address to your schema when the schema is being made. 

:::tip Explore the latest examples on GitHub
https://github.com/ethereum-attestation-service/eas-contracts/tree/master/contracts/resolver/examples
:::


### Attester Resolver
The `AttesterResolver.sol` resolvers purpose is to check if an attestation is created by a specific attester, which is set during the contract deployment. When a new attestation is submitted using this resolver, the contract verifies that the attestation comes from the specified attester before allowing it to proceed. 

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/AttesterResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether the attestation is from a specific attester.
 */
contract AttesterResolver is SchemaResolver {
    address private immutable _targetAttester;

    constructor(IEAS eas, address targetAttester) SchemaResolver(eas) {
        _targetAttester = targetAttester;
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal view override returns (bool) {
        return attestation.attester == _targetAttester;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}
```

### Expiration Time Resolver
The `ExpirationTimeResolver.sol` resolver contract checks if the expiration time of a new attestation is later than a specific timestamp. When an attestation is made, the contract verifies if the attestation's expiration time is greater than or equal to the _validAfter timestamp specified during the contract deployment. If the expiration time meets this condition, the attestation is considered valid and allowed to proceed.

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/ExpirationTimeResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether the expiration time is later than a specific timestamp.
 */
contract ExpirationTimeResolver is SchemaResolver {
    uint256 private immutable _validAfter;

    constructor(IEAS eas, uint256 validAfter) SchemaResolver(eas) {
        _validAfter = validAfter;
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal view override returns (bool) {
        return attestation.expirationTime >= _validAfter;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}
```

### Paying Resolver
The `PayingResolver.sol` resolver contract is designed to pay attesters when they create an attestation and expects the payment to be returned during revocations. The contract utilizes the OpenZeppelin Address library for safe transfers of funds.

:::warning This is an example contract
Ensure you are using audited contracts anytime user funds are involved you need to ensure safe transfer of funds. This is just an example contract and not intended to be copied.
:::

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/PayingResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { Address } from "@openzeppelin/contracts/utils/Address.sol";

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that pays attesters (and expects the payment to be returned during revocations)
 */
contract PayingResolver is SchemaResolver {
    using Address for address payable;

    error InvalidValue();

    uint256 private immutable _incentive;

    constructor(IEAS eas, uint256 incentive) SchemaResolver(eas) {
        _incentive = incentive;
    }

    function isPayable() public pure override returns (bool) {
        return true;
    }

    function onAttest(Attestation calldata attestation, uint256 value) internal override returns (bool) {
        if (value > 0) {
            return false;
        }

        payable(attestation.attester).transfer(_incentive);

        return true;
    }

    function onRevoke(Attestation calldata attestation, uint256 value) internal override returns (bool) {
        if (value < _incentive) {
            return false;
        }

        if (value > _incentive) {
            payable(address(attestation.attester)).sendValue(value - _incentive);
        }

        return true;
    }
}
```

### Recipient Resolver
The `RecipientResolver.sol` is a contract that ensures an attestation is made to a specific recipient. When an attestation is created using this resolver, the contract verifies that the recipient of the attestation matches the target recipient specified during the contract deployment.

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/RecipientResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether the attestation is to a specific recipient.
 */
contract RecipientResolver is SchemaResolver {
    address private immutable _targetRecipient;

    constructor(IEAS eas, address targetRecipient) SchemaResolver(eas) {
        _targetRecipient = targetRecipient;
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal view override returns (bool) {
        return attestation.recipient == _targetRecipient;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}
```

### Revocation Resolver
The `RevocationResolver.sol` is a contract that provides control over revocations of attestations. When this resolver is used, it allows all attestations to be created without any additional conditions. However, for revocations, the contract's behavior is determined by the `_revocation` state variable. When `_revocation` is set to `true`, revocations are allowed, and when it is `false`, revocations are disallowed. The contract owner can update the `_revocation` status through the `setRevocation` function.

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/RevocationResolver.sol


```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that controls revocations.
 */
contract RevocationResolver is SchemaResolver {
    bool private _revocation;

    constructor(IEAS eas) SchemaResolver(eas) {}

    function setRevocation(bool status) external {
        _revocation = status;
    }

    function onAttest(Attestation calldata /*attestation)*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal view override returns (bool) {
        return _revocation;
    }
}
```
### Token Resolver
The `TokenResolver` is a custom schema resolver contract that checks whether a specific amount of tokens has been approved for an attestation. When an attestation is submitted, the resolver transfers the required tokens from the attester's address to itself. The contract utilizes the ERC20 standard and the SafeERC20 library for secure token transfer. 

:::warning This is just an example contract
Anytime user funds are involved you need to ensure safe transfer of funds. This is just an example contract and not intended to be copied.
:::

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/TokenResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether a specific amount of tokens was approved to be included in an attestation.
 */
contract TokenResolver is SchemaResolver {
    using SafeERC20 for IERC20;

    IERC20 private immutable _targetToken;
    uint256 private immutable _targetAmount;

    constructor(IEAS eas, IERC20 targetToken, uint256 targetAmount) SchemaResolver(eas) {
        _targetToken = targetToken;
        _targetAmount = targetAmount;
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        _targetToken.safeTransferFrom(attestation.attester, address(this), _targetAmount);

        return true;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}
```

### Value Resolver
The `ValueResolver` contract is a simple schema resolver that checks if a specific amount of ETH was sent along with an attestation. When creating the contract, a target value is set, and during the attestation process, it ensures that the submitted value matches the pre-defined target value. If the value matches, the attestation is considered valid.

https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/resolver/examples/TokenResolver.sol

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether a specific amount of ETH was sent with an attestation.
 */
contract ValueResolver is SchemaResolver {
    uint256 private immutable _targetValue;

    constructor(IEAS eas, uint256 targetValue) SchemaResolver(eas) {
        _targetValue = targetValue;
    }

    function isPayable() public pure override returns (bool) {
        return true;
    }

    function onAttest(Attestation calldata /*attestation*/, uint256 value) internal view override returns (bool) {
        return value == _targetValue;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}
```
## Need any help or have questions?
DM us on Twitter [@eas_eth](https://twitter.com/eas_eth). We'll setup a telegram chat from there with your team to help out!
