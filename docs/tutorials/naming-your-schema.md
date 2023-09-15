---
sidebar_position: 9
---

# Naming Your Schema
As a creator of a schema, you can "Name a Schema". Here's a quick tutorial in how you do just that.

:::tip Names are not necessary
You do not need to Name a Schema unless you want to give it a bit more context for people that are using the EASSCAN explorer.
:::

## Names are Just Referenced Attestations
Instead of adding more bloat to the protocol contracts and to the structs, we decided on a more composabile and flexible path by using the `refUID` feature when making an attestation. 

:::info
When you "name a schema", the creator is just attesting to it's name using a referenced attestation to the UID of the schema.
:::

## How to Add a Name
1. First create your schema and **make sure you have a** `UID` **of the schema** and access to the `creator` address of the schema.
2. Then you can use `Schema #1` on most chains, which is `Schema UID` `0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc`. 
    - Here's an example `Name a Schema` on Sepolia: 
        - [https://sepolia.easscan.org/schema/view/0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc](https://sepolia.easscan.org/schema/view/0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc)
3. **Fill in the Schema Data:**
    - You **do NOT need to add a Recipient** for this attestation.
    - Add the `UID` of the Schema you created that you want to name.
    - Type in the `Name` of your schema. Keep it concise yet descriptive.
    - Make the Attestation **Onchain**
4. **Nice work!** You've successfully named a schema.

Remember that this does not add the name to the schema record itself, it's simply using referenced attestations to attest to what the name of the Schema UID should be. If there is a valid name from the creator of the schema, then the name is indexed and displayed on EASSCAN.

:::tip
This only works for the creator address of the Schema. If you are attesting from a different address, we wont add the label to the schema.
:::

## Tired of the Name?
Revoke the `Name a Schema` attestation you made from the `creator` address of the schema. Once revoked, we will remove the label. You can then attest to a new name of the Schema if you'd like.

**Read More:** [Revoking Attestations](/docs/core--concepts/revocation.md).
