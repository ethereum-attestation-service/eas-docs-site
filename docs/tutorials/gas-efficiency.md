---
sidebar_position: 8
---

# Making Gas Efficient Schemas
In this tutorial, we'll explore how to create gas-efficient schemas using Ethereum ABI types. We'll dive into the various Ethereum ABI types, their estimated sizes in bytes, and their associated gas costs. Plus, we'll provide guidance on when to use specific types for different use cases, complete with examples.

Think of this tutorial as a refresher if you're already familiar with these concepts. If not, you're in the right place. We’re eager to teach you everything there is to know about gas and crafting efficient schemas on EAS.

## Gas 101

:::tip Save Gas = Save Money
Transaction Fee (ETH) = Total Gas Used (Gas) × Gas Price (Gwei)
:::

To calculate the total gas cost of a transaction, you need to sum up the base transaction cost, data cost, and execution cost.
- **Base transaction cost:** A flat cost of 21,000 gas is applied to every Ethereum transaction, regardless of the complexity or size of the transaction.
- **Data cost:** Each byte of data in the transaction input (calldata) has an associated gas cost. Zero bytes cost 4 gas, while non-zero bytes cost 16 gas per byte.
- **Execution cost:** The cost of executing the operations (opcodes) within the smart contract called by the transaction. Each operation has a specific gas cost, and the total execution cost is the sum of the costs of all operations executed.

The gas cost is then used in conjunction with the current base fee to estimate the total transaction fee. The base fee is algorithmically adjusted for each block based on the network's demand for blockspace. When a block is more than 50% full, the base fee increases by 1/8 (12.5%) for the next block, and when a block is less than 50% full, the base fee decreases by 1/8 (12.5%).

Finally, you can also include an optional tip (priority fee) to incentivize validators to prioritize your transaction. The **total transaction fee** would then be the sum of the estimated base fee and the tip. 

:::info Did you know gwei are also called Shannons?
Shannon, is a unit of information named after Claude Shannon, an american mathematician and cryptographer known as “the father of information theory”. It’s an alternative name for gwei to honor Shannon’s contributions to the field of information theory. 1 shannon = 1 gwei. 
:::

## Choosing the ABI Types for your Schema
Below is a list of available Ethereum ABI types, their use cases, sizes in bytes, estimated gas costs, and examples.

### `address`
- **Use case:** Representing Ethereum addresses or contract addresses, typically used for identifying an account or a smart contract.
- **Size:** 20 bytes.
- **Gas cost:** Relatively low, primarily influenced by the operation being performed (e.g., transferring tokens).
- **Example:** 0x742d35Cc6634C0532925a3b844Bc454e4438f44e

### `string`
- **Use case:** Storing text of arbitrary length, suitable for names, descriptions, or other text data.
- **Size:** Variable (depends on the length of the string).
- **Gas cost**: Potentially high for long strings, as it increases with the size of the data.
- **Example:** "Hello, world!"

### `bool`
-** Use case:** Representing true or false values, often used for flags or status indicators.
- **Size:** 1 byte.
- **Gas cost:** Low.
- **Example:** true or false

### `bytes32`
- **Use case:** Storing unique identifiers, hashes, or small data, suitable for content addressing or mapping keys.
- **Size:** 32 bytes.
- **Gas cost:** Low.
- **Example:** 0x8d9da45f129800c0e56a8f1f03a3451a43d6a2a2f824ea87ff63d9a3c3a3a1bf

### `bytes`
- **Use case:** Storing arbitrary byte values, suitable for binary data or serialized data structures.
- **Size:** Variable (depends on the length of the byte array).
- **Gas cost:** Potentially high for large arrays, as it increases with the size of the data.
- **Example:** 0x1234567890abcdef

### `uint`
- **Use case:** Representing unsigned integers of various sizes (e.g., uint8, uint16, uint32, ..., uint256), suitable for counting, indexing, or storing non-negative values with different ranges.
- **Size:** Variable (depends on the uint type, e.g., 1 byte for uint8, 2 bytes for uint16, 32 bytes for uint256).
- **Gas cost:** Low for smaller uint types, higher for larger types (e.g., uint256).
- **Example:** uint64 for timestamps (covers a range of over 584 billion years)

### `<type>[]`
- **Use case:** Representing variable-length arrays of elements of the given type (e.g., address[]), suitable for storing lists or sets of data with the same data type.
- **Size:** Variable (depends on the number of elements and their individual sizes).
- **Gas cost:** Potentially high for large arrays, as it increases with the size of the data.
- **Example:** address[] for a list of Ethereum addresses

### `tuples`
- **Use case:** Representing ordered, fixed-length lists of elements with potentially different data types, suitable for grouping related data or returning multiple values from a function.
- **Size:** Variable (depends on the size and number of elements in the tuple).
- **Gas cost:** Potentially high for large tuples, as it increases with the size of the data.
- **Example:** (address, uint256, bool) for an Ethereum address, an unsigned integer, and a boolean value

Be mindful of the size and complexity of the data you're working with and choose the most appropriate types for your specific needs. For instance, if you're working with time values, using a uint64 is more efficient than a uint256, as it covers an extensive range while consuming less gas.

## A Few Tips to Reduce that Gwei
When you’re processing a ton of transactions, small increases in bytes can add up significantly in costs over time. It’s like driving a car - you don’t floor it if you're trying to save on gas. You’ll have a great time but you'll run out of gas faster. If you’re smart with your gas your money will last longer.

### Choose Efficient Data Types
1. **Choose uint64 for timestamps instead of uint256:** A `uint64` value can store up to 2^64-1, which is more than enough for representing timestamps. Using `uint64` instead of `uint256` saves 24 bytes, reducing the gas cost.
2. **Use uint8 for limited options:** Smaller uints like `uint8` can be used to store a smaller integer values representing an option, reducing the gas cost compared to storing the entire `string`. Storing a role as a `string` would cost 7 * 68 = 476 gas (assuming "moderator"), while using an `uint8` would only cost 16 gas, saving 460 gas.
3. **Convert strings into bytes32 values instead of using string:** If the text you need to store is shorter than or equal to 32 characters, it's more gas-efficient to use `bytes32`. For example, the `string` "Hello world!" is 12 characters long and would cost 12 * 68 = 816 gas for a string and 32 * 8 = 256 gas for a `bytes32`, saving you 560 gas.
4. **Use bytes instead of string for shorter texts:** If you need to store text that doesn't fit in a `bytes32`, consider using bytes if the length is short. The gas cost will depend on the actual length, potentially saving gas over a string with a longer fixed length.
5. **Use the smallest integer types that fit your data:** Instead of always using `uint256`, consider using smaller integer types like `uint8`, `uint16`, or `uint32` if the data range fits. Smaller integer types occupy less space, resulting in lower gas costs. However, if your integer is a number for a price or value of something, it's typically best to use `uint256`. 
6. **Use packed arrays to save gas:** If you have multiple values of the same type, consider using an `array` (e.g., `uint8[]` or `uint16[]`). Packed arrays store elements consecutively, without padding, reducing gas costs.
7. **Use bool instead of integers for binary values:** When storing binary values (true or false), use the `bool` type instead of integers. This can save space and reduce gas costs.
8. **Optimize for off-chain data storage when possible:** If your schema includes large data sets or elements that don't require on-chain verification, consider storing the data off-chain and only storing a reference (e.g., a `bytes32` hash) on-chain. This can significantly reduce the gas costs associated with your schema.
9. **Use a modular design to your schema:** Consider what is the absolute minimum required in my schema and determine if it might be better to break down your schema into individual parts that reference each other. If the schema field won't be used each time the attestation is made, it's a good sign that it should be broken down into modular parts that are composed together  using the `refUID` field when needed. 
10. **Avoid redundant data:** Double check your schema to see if you have any redundant fields. For example, you might add an `address` field for the schema and be using it as a recipient of the attestation. This is redundant because every attestation has an optional recipient field that can be used.

## Ready to get started?
- Easily start making schemas using our [**SDK**](/docs/developer-tools/eas-sdk)
- Use our no-code schema builder on any of the explorer sites like [**https://sepolia.easscan.org/schema/create**](https://sepolia.easscan.org/schema/create)

## Still need some help?
- Check out our [**Create a Schema Page**](/docs/tutorials/create-a-schema).
- DM us on Twitter and we'd be happy to answer questions: [**https://twitter.com/eas_eth**](https://twitter.com/eas_eth)
