---
sidebar_position: 3
---

# Make an Attestation
Making an attestation allows anyone to attest with any [Attestation Schema](https://easscan.com/schemas) registered with EAS. You can make attestations using the API or the UI builder on the [EASScan website](https://easscan.com/attestation/create).

Here's an overview of how to make an attestation:
1. Register a schema with the global schema registry, which defines the data fields that can be included in an attestation.
2. Use the EAS contract to create an attestation, which includes the data fields and values defined in the schema.
3. Sign the attestation using the Ethereum wallet of the user who is making the attestation.

## Create an Attestation on the EAS Website 🧙

Go to => [https://easscan.com/schemas](https://easscan.com/schemas): 

:::tip Tip
Make sure you've connected your wallet to EAS.
:::

## Making Attestations using the contracts 📄
In order to make attestations with EAS, you will need to:

#### 1.Register a schema with the global schema registry. 
This defines the data fields and structure of the attested claims that you will be making. You can also use an existing schema if the fields match your use case need.


#### 2. Use the `attest` or `attestByDelegation` functions of the EAS contract to make attested claims. 
These functions take the following parameters:

- `recipient`: The optional address of the user for whom you are making the attested claims.
- `schema`: The ID of the schema that defines the data fields and structure of the attested claims.
- `expirationTime`: The optional time at which the attested claims will expire and no longer be considered valid.
- `revocable`: A boolean value indicating whether the attested claims can be revoked by the attester.
- `refUUID`: The UUID of an existing attestation that this attestation is referencing. This can be used to create a chain of attested claims.
- `data`: The attested claims, encoded as a byte array using the EIP712 encoding format.
- `attester`: (optional) The address of the attester who is making the attested claims. This is only used for attestByDelegation and should be the address of the signer of the EIP712 signature.
- `v`: (optional) The v component of the EIP712 signature. This is only used for attestByDelegation.
- `r`: (optional) The r component of the EIP712 signature. This is only used for attestByDelegation.
- `s`: (optional) The s component of the EIP712 signature. This is only used for attestByDelegation.

#### 3. Use the `getAttestation` function of the EAS contract to retrieve the attested claims that you have made. 
This function takes the UUID of the attested claims as a parameter and returns a Attestation struct containing the following fields:
- `recipient`: The address of the user for whom the attested claims were made.
- `schema`: The ID of the schema that defines the data fields and structure of the attested claims.
- `expirationTime`: The time at which the attested claims will expire and no longer be considered valid.
- `revocable`: A boolean value indicating whether the attested claims can be revoked by the attester.
- `refUUID`: The UUID of the attestation that this attestation is referencing.
- `data`: The attested claims, encoded as a byte array using the EIP712 encoding format.
- `attester`: The address of the attester who made the attested claims.
- `uuid`: The UUID of the attested claims.
- `revoked`: A boolean value indicating whether the attested claims have been revoked.

#### 4. Verify the attestation using the `verify` function in the EAS contract. 
This function takes the following parameters:
- `uuid`: The UUID of the attestation that you want to verify.
- `recipient`: The address of the user whose identity the attestation is about.
- `schema`: The ID of the schema that was used to make the attestation.
- `expirationTime`: The time at which the attestation will expire and can no longer be verified.
- `revocable`: A boolean value that indicates whether the attestation can be revoked by the attester.
- `refUUID`: A reference UUID for the attestation, which can be used to link the attestation to other related attestations.
- `data`: The data that was included in the attestation, encoded as a byte array.

##### 5. (Optional) Use the `revoke` or `revokeByDelegation` functions.
These will revoke attested claims that you have made.


## The Attestation Contract 📄
`Attest` with `Schemas` using the `EAS.SOL` contract. [View the entire contract on github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol).

Here's an overview of the contract: 
1. The contract is initialized with the addresses of a global schema registry and an EIP-712 verifier.
2. Users can use the contract's `attest()` function to create an attestation. This function takes several arguments, including the optional recipient of the attestation, the schema of the attestation data, the optional expiration time of the attestation, and the data to be attested to. The function also takes a `refUUID` argument, which allows the attestation to reference another attestation.
3. Users can also use the contract's `attestByDelegation()` function, which is similar to `attest()` but allows the user to delegate the attestation process to another address. This function takes additional arguments for the delegated attester's address and a signed message.
4. Once created, an attestation can be retrieved by its unique identifier (UUID) using the contract's `getAttestation()` function.
5. Attestations can be revoked using the contract's `revoke()` and `revokeByDelegation()` functions. These functions work similarly to the `attest()` and `attestByDelegation()` functions, respectively.
6. The contract also provides several error-checking functions, such as `isValidAttestation()` and `isRevoked()`, which can be used to verify the validity and revocation status of an attestation.
7. The contract also allows users to check the addresses of the global schema registry and the EIP-712 verifier using the `getSchemaRegistry()` and `getEIP712Verifier()` functions.

```jsx title="/contracts/SchemaRegistry.sol"

    function register(string calldata schema, ISchemaResolver resolver) external returns (bytes32) {
        SchemaRecord memory schemaRecord = SchemaRecord({ uuid: EMPTY_UUID, schema: schema, resolver: resolver });

        bytes32 uuid = _getUUID(schemaRecord);
        if (_registry[uuid].uuid != EMPTY_UUID) {
            revert AlreadyExists();
        }

        schemaRecord.uuid = uuid;
        _registry[uuid] = schemaRecord;

        emit Registered(uuid, msg.sender);

        return uuid;
    }
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create a Schema on the EAS Website 🧙

Go to => [https://easscan.com/schemas](https://easscan.com/schemas): 

:::tip Tip
Make sure you've connected your wallet to EAS.
:::