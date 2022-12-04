---
sidebar_position: 1
---

# Create a Schema
A schema is a way of organizing data. Schemas are the building blocks to all attestations. They establish the rules and conditions you want to attest with. You can create schemas about anything, and they are completely customizable. This means that you can choose preexisting schemas that meet your needs or compose new ones with more fields or different naming conventions. 

:::tip Tip
Double check the [Schemas](https://easscan.com/schemas) on the EAS Explorer to see if there is already a Schema for your attestation need.
:::


## Create a Schema on the EAS Website 🧙

Go to => [https://easscan.com/schemas](https://easscan.com/schemas): 

:::tip Tip
Make sure you've connected your wallet to EAS.
:::


## Schema Fields ✔️
Schemas follow the **Solidity ABI** for acceptable types. Below is a list of current elementary types: 

- `address` An address can be any ethereum address or contract address. Equivalent to unit160, except for the assumed interpretation and language typing.
- `string` A string can be any text of arbitrary length
- `bool` A bool can either be on or off. Equivalent to uint8 resitricted to the values of 0 and 1.
- `bytes32` A bytes32 is a 32 byte value. Useful for unique identifiers or small data.
- `bytes` A bytes value is an arbitrary byte value.
- `<type>[]`  A variable-length array of elements of the given type.
- `uints` uint values can be from uint8 -> uint256.

Have questions about acceptable types? Learn more about [Solidity ABI types](https://docs.soliditylang.org/en/v0.8.16/abi-spec.html).

## Using the SchemaRegistry.sol Contract
To create a schema using the SchemaRegistry.sol contract, you will need to have access to the contract and have some familiarity with Solidity. Here are the steps to create a schema using the contract:

1. Import the SchemaRegistry.sol contract and the ISchemaResolver interface into your Solidity project.
2. Define the fields of your schema, including the name and type of each field.
3. Create a new instance of the `SchemaRecord` struct, which is used to store the schema in the contract.
4. Initialize the fields of the `SchemaRecord` instance with the values from your schema.
5. Use the `register()` function of the `SchemaRegistry.sol` contract to register your schema, passing in the SchemaRecord instance as an argument.
6. Verify that your schema has been successfully registered by calling the `getSchema()` function of the contract and passing in the `UUID` of your schema.

## Example
To create a schema for a digital identity, you can use the `register()` function in the `SchemaRegistry.sol` contract. Here is an example of how to do that:

```jsx
import { SchemaRegistry } from "./SchemaRegistry.sol";

// Define the fields of your schema
struct DigitalIdentity {
    bytes32 firstName;
    bytes32 lastName;
    bytes32 dateOfBirth;
    bytes32 address;
}

// Create a new instance of the SchemaRegistry contract
const schemaRegistry = new SchemaRegistry();

// Generate the Solidity ABI for your schema
const digitalIdentityAbi = abi.encode(DigitalIdentity);

// Register your schema with the SchemaRegistry contract
const digitalIdentitySchemaUuid = schemaRegistry.register(
    digitalIdentityAbi,  // The ABI for your schema
    true,  // Set this to true if you want the schema to be revocable
    {from: "0x..."}  // The address of the account registering the schema
);

// The `digitalIdentitySchemaUuid` variable will now contain the unique identifier for the registered schema
```

The `register()` function in the `SchemaRegistry.sol` contract will return a unique identifier (`UUID`) for the registered schema, which can be used to make attestations with that schema. The `schema UUID` can also be used to retrieve the schema details from the contract.

## Learn about the The Schema Contract 📄

`Schemas` are registered using the `SchemaRegistry.SOL` contract. [View the entire contract on github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol).

This contract allows users to register a schema that defines the data format for a specific type of attestation, along with a schema resolver contract that can be used to verify the data. Here is a step-by-step explanation of what the contract does:

1. The contract is initialized with the `ISchemaRegistry` and `ISchemaResolver` interfaces.
2. Users can use the contract's `register()` function to register a schema. This function takes two arguments: the schema itself, which is a string representing the JSON object, and the address of the schema resolver contract.
3. The `register()` function calculates a unique identifier (UUID) for the schema using the `_getUUID()` private function, which hashes the schema and schema resolver address.
4. The function then checks if a schema with the same UUID has already been registered by checking the `_registry mapping`. If a schema with the same UUID exists, the function will revert with the `AlreadyExists()` error.
5. If the schema is unique, the function will add it to the `_registry` mapping and emit a `Registered()` event.
6. Users can retrieve a registered schema by its UUID using the contract's `getSchema()` function. This function returns the schema record, which contains the schema and schema resolver address.
















