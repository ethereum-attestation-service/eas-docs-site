---
sidebar_position: 5
---

# Delegated Attestations

Delegated Attestations enable an entity to sign an attestation while allowing another entity to cover the transaction
fee.

:::tip Delegator = Attester
When an attestation is delegated, the delegator (signer) address is the address that shows up as the attester on the attestation.
:::

## Use Cases

When using delegated attestations on EAS, the actual attester and the one covering the transaction fee can be two
different entities, allowing for various use cases. It's particularly useful when:

- A service wants to pay for its users' attestations (covering gas costs)
- An entity wants to make multiple attestations but allows the recipient or another party to pay for the transaction
  fees for it to go on-chain.

## How they work

In the [**EAS GitHub Repository**](https://github.com/ethereum-attestation-service/eas-contracts), you'll find code
snippets from the contracts used to implement delegated attestations.

## Supercharged Delegated Attestations with Proxy Contracts

Standard delegated attestations require an incrementing nonce based on the EIP-712 spec, but the proxy contract allows
you to accept delegated attestations out of order and with an expiration time. This is particularly useful when you have
a single entity like a KYC provider attesting to many users while wanting the users to pay for the gas. See the below
example proxy contract for more details.

:::tip **Example Permissioned EIP712 Proxy Contract:**
https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/eip712/proxy/examples/PermissionedEIP712Proxy.sol
:::

