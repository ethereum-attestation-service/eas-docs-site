---
sidebar_position: 1
---

# Create a Schema
Schemas are the building blocks to all attestations. They establish the rules and conditions you want to attest with. 

:::tip Tip
Double check the `SchemaRegistry` to see if there is already a Schema for your attestation need.
:::


## Schema Fields ✔️
Schemas follow the Ethereum ABI for acceptable fields. Below is a list of current field types.

- `address` An address can be any ethereum address or contract address
- `string` A string can be any text of arbitrary length
- `bool` A bool can either be on or off
- `bytes32` A bytes32 is a 32 byte value. Useful for unique identifiers or small data.
- `bytes` A bytes value is an arbitrary byte value.
- `uints` uint values can be from uint8 -> uint256.

## The Schema Contract 📄

`Schemas` are registered using the `SchemaRegistry.SOL` contract. [View the entire contract on github](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/SchemaRegistry.sol).

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

### `#1` Click on the `Create Schema` button 
Navigate to the Schema's page and click on `Create Schema`. This will trigger the modal wizard to start the process. 

![CreateSchema Step 1](./img/CreateSchema-1.png)

### `#2` Add your Schema field types. 
Click on the `Add Type` button which will allow you to add your Schema fields. You can add as many fields as you need for your Schema use case.

![CreateSchema Step 2](./img/CreateSchema-2.png)


### `#3` Name your Schema fields. 
It's best practice to use camelCase when labeling your Schema. 

![CreateSchema Step 3](./img/CreateSchema-4.png)


### `#4` Click `Create Schema` and sign the transaction. 
Once you click `Create Schema` it will trigger an Ethereum transaction with your connected wallet. 
- Review the signature and sign.
- Once you sign, the transaction will start processing.

![CreateSchema Step 5](./img/CreateSchema-5.1.png)

### `#5` Find your Schema in the Registry. 
The Schema will be automatically assigned an Schema ID#. Once it generates, feel free to click it and inspect the Schema Details.

![CreateSchema Step 6](./img/CreateSchema-6.png)

### `#6` Open your schema. 
The Schema will be automatically assigned an Schema ID#. Once it generates, feel free to click it and inspect the Schema Details.

![CreateSchema Step 6](./img/CreateSchema-7.png)














