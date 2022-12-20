---
sidebar_position: 3
---

# How Attestations Work
Attestations on Ethereum are statements or evidence of information made by anyone about anything, which can be registered, verified, and revoked using the Ethereum Attestation Service (EAS) protocol. Attestations can be used to verify the identity, credentials, or other information of individuals, organizations, and other entities, and are important for establishing trust and credibility in the digital world.

![Types of Attestations](./img/types-of-attestations.png)


Attestations on Ethereum can be created and validated using smart contracts. This allows for a decentralized and transparent process for verifying the authenticity of attestations. Here's a brief overview of the process:

1. **Register a schema** on Ethereum using a smart contract (EAS). This schema defines the data fields and structure of the attested claims that will be made.
2. Use the smart contract (EAS) to **create an attestation**, which includes the data fields and values defined in the schema. The attestation is signed with the Ethereum wallet of the user making the attestation.
3. The attestation is stored on Ethereum, providing an immutable record of the attestation.
4. Other users can verify the authenticity of the attestation using the smart contract and Ethereum.

One of the main benefits of making attestations on Ethereum is the security and immutability of the blockchain. Because the attestation is stored on the blockchain, it is resistant to tampering and can be trusted as a reliable source of information. Additionally, the decentralized nature of Ethereum ensures that the attestation process is transparent and open, reducing the risk of fraud or bias.


## Making Attestations with EAS
In order to make an attestation on Ethereum using EAS, you will need to follow these steps:

1. **Define the data fields and structure** of your attestation by creating an `Attestation Schema` and registering it with the global schema registry. This schema will be used to define the data fields and structure of the attestation that you will be making.

2. **Make an attestation** using the `attest` or `attestByDelegation` functions of the EAS contract. These functions allow you to create an attestation and include the data fields and values defined in the schema.

3. **Sign the attestation** using the Ethereum wallet of the user who is making the attestation. This ensures the authenticity and integrity of the attestation.

4. **Verifying Attestations** - To verify an attestation, you can use the verify function in the EAS contract. This function takes the UUID of the attestation and the address of the recipient as input and returns a boolean value indicating whether the attestation is valid. You can also use the `verifyByDelegation` function if the attestation was made by delegation. This function takes the `UUID` of the attestation, the address of the recipient, and the `EIP712` signature as input and returns a boolean value indicating whether the attestation is valid.

5. **Revoking Attestations** - Attestations can be made revocable by setting the `revocable` flag to true when making the attestation. If an attestation is revocable, it can be revoked by the attester using the revoke function in the EAS contract. This function takes the `UUID` of the attestation as input and sets the revoked flag to true, invalidating the attestation. It's important to note that revoking an attestation does not delete the attestation from the Ethereum blockchain. It simply marks the attestation as revoked, which means it will no longer be considered valid when it is verified.

Check out our [tutorials](/docs/category/tutorials) to learn more about how to use EAS.
