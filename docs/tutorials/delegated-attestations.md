---
sidebar_position: 5
---

# Delegated Attestations
Delegated Attestations enable an entity to sign an attestation while allowing another entity to cover the transaction fee. 

## Concept
Delegated attestations allow applications and entities to have more flexibility on who is responsible to pay for the network’s transaction fee. This provides greater flexibility in determining who is responsible for paying the network's transaction fees, which is particularly useful in scenarios where an application wants to cover the cost of its users' attestations or an entity wishes to delegate gas fees to someone else.

:::tip Delegator = Attester
When an attestation is delegated, the delegator is the person who shows up as the attester on the attestation. 
:::

## Use Cases
When using delegated attestations on EAS, the actual attester and the one covering the transaction fee can be two different entities, allowing for various use cases. It's particularly useful when:
- A service wants to pay for its users' attestations (covering gas costs)
- An entity wants to make multiple attestations but allows the recipient or another party to pay for the transaction fees for it to go on-chain. 

## How they work
In the [**EAS GitHub Repository**](https://github.com/ethereum-attestation-service/eas-contracts), you'll find code snippets from the contracts used to implement delegated attestations. Below are a few code snippets from the contracts:

### Delegated Attestation Request Struct
The struct for a delegated attestation request consists of:

```jsx
struct DelegatedAttestationRequest {
    bytes32 schema; // The unique identifier of the schema.
    AttestationRequestData data; // The arguments of the attestation request.
    EIP712Signature signature; // The EIP712 signature data.
    address attester; // The attesting account.
}
```
### Attest by Delegation
Use the `attestByDelegation` function to attest on behalf of someone else:

```jsx
 function attestByDelegation(
        DelegatedAttestationRequest calldata delegatedRequest
    ) external payable returns (bytes32) {
        _verifyAttest(delegatedRequest);

        AttestationRequestData[] memory data = new AttestationRequestData[](1);
        data[0] = delegatedRequest.data;

        return _attest(delegatedRequest.schema, data, delegatedRequest.attester, msg.value, true).uids[0];
    }
```

### Revoke by Delegation
Use the revokeByDelegation function to revoke an attestation on behalf of someone else:

```jsx
function revokeByDelegation(DelegatedRevocationRequest calldata delegatedRequest) external payable {
        _verifyRevoke(delegatedRequest);

        RevocationRequestData[] memory data = new RevocationRequestData[](1);
        data[0] = delegatedRequest.data;

        _revoke(delegatedRequest.schema, data, delegatedRequest.revoker, msg.value, true);
    }
```

## Supercharged Delegated Attestations with Proxy Contracts
Regular attestations have a nonce order, the proxy contract can help you ignore the nonce and have different rules. If many people delegate to one entity to pay, then that works. But you can’t have one entity delegating to multiple to pay unless you use a proxy contract. This is particularly useful as you can’t have 1 entity delegate many attestations to many people to sign where you pay. 

:::tip **Example Permissioned EIP712 Proxy Contract:**
https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/eip712/proxy/examples/PermissionedEIP712Proxy.sol
:::

The Permissioned EIP712 Proxy Contract is a specialized smart contract that extends the functionality of the EIP712 Proxy Contract to enable delegated attestations and revocations. However, this contract restricts these operations to only the contract owner, ensuring a permissioned access control mechanism. 

In essence, the Permissioned EIP712 Proxy Contract allows the owner to attest or revoke attestations on behalf of other users, while preventing unauthorized parties from performing these actions.

## Next Steps
Now that you have a better understanding of `delegated attestations` and their use cases, you can explore the EAS GitHub Repository to dive deeper into the code and see how to integrate delegated attestations into your own projects.

Remember, when working with delegated attestations, it's essential to ensure the correct delegation of responsibilities for paying the network's transaction fees. This will help you create more efficient and user-friendly applications.

If you need more information or support regarding delegated attestations, feel free to reach out to the [EAS community on Twitter](https://twitter.com/eas_eth). They can provide guidance and best practices for implementing delegated attestations in your projects.


