---
sidebar_position: 4
---
# The Attestation Record
A unique `attestation record` is created each time an attestation is made using EAS and can be verified on EAS's explorer. The attestation record contains important information about the attestation, including the schema used, the attestor, the recipient (if specified), the expiration time (if specified), and more.

In this guide, we'll walk through how to read and understand an attestation record and transaction, including the various fields and data included in an attestation.

## Understanding the Attestation Record
Each attestation record has the following fields:
- `Attestation UUID` - this is a universal unique identification number for the attestation.
- `Schema` - the schema used to make the attestation.
- `Attestor` - the address that made the attesation.
- `Recipient` - an **optional** recipient of the attestation that was made.
- `Transaction ID` - The unique transaction ID on Etherscan that registered the attestation on Ethereum (on-chain only).
- `Expiration Time` - an **optional** date that the attestation will expire if provided by the attestor.
- `Is Revoked` - the status of the attestation identifing if it has been revoked or remains vaild.
- `Referenced Attestation` - Attestations that **this** attestation record is referencing.
- `Referencing Attestations` - Attestations that are referencing this attestation record.
- `Decoded Data`- The decoded version of the data.
- `Raw Data` - The encoded data version of the schema field types.

**Example Attestation Record**
![#33 - Make A Statement](./img/make-statement-attestation-record-sample.png)

## Learn about the schema used to make the attestation

To read and understand an attestation record, you'll need to first look at the schema that was used to create the attestation. This will tell you what the different fields in the attestation represent and how they were encoded. For example, if the schema indicates that the first field is a string and the second field is a uint256, you can expect that the first field in the attestation record will be a string and the second field will be a uint256.

Once you understand the schema and the different fields in the attestation record, you can use the information in the record to verify the authenticity of the claim or information that the attestation is making. For example, if the attestation is making a claim about the identity of a person, you can use the information in the record to verify that the person is who they claim to be.
å
In addition to reading and understanding the attestation record, you can also use a blockchain explorer or scanner to view the transaction that created the attestation. This will give you additional information about the attestation, including the transaction hash, the block number, and the timestamp of the transaction.

## Attestations can also be found on Etherscan
To view an attestation transaction on Etherscan or another blockchain explorer, simply search for the transaction ID included in the attestation record. This will bring up the transaction details, including the data sent with the transaction, the addresses involved, and the gas used.

The data sent with the transaction will include the fields of the attestation, encoded according to the schema used to make the attestation. You can use the schema to decode the data and see the information attested to in a human-readable format.

## Use the EAS.sol contract for making attestations.
Explore the current code for the [EAS.sol contract](https://github.com/ethereum-attestation-service/eas-contracts/blob/master/contracts/EAS.sol) that makes attestations possible. 