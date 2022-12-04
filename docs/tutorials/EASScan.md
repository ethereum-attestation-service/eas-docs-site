---
sidebar_position: 5
---
# EAS Scan
Scanner is EAS's transaction explorer. It provides transparency and access to the latest attestations and schemas running on EAS. It allows developers and users to view and verify attestations made using the Ethereum Attestation Service (EAS) and the global schema registry.

[https://easscan.com/](https://easscan.com/)

## Using the EAS Scanner
Now that you understand the basics of EAS and the schema registry, let's take a look at how to use the EAS Scanner to view attestations and schemas.

### Viewing Attestations
To view an attestation with the EAS Scanner, you need to know the unique identifier (UUID) of the attestation. You can find the UUID of an attestation in the transaction data on the Ethereum blockchain, or by using the EAS API to query for attestations.

Once you have the UUID of the attestation, you can use the EAS Scanner to view the details of the attestation, including the data that was attested to, the schema that was used, and the address of the attester.

### Viewing Schemas
The EAS Scanner also allows you to view the schemas in the schema registry. To view a schema, you need to know the UUID or name of the schema, or use the EAS API to query for schemas. Once you have the UUID or name of the schema, you can easily find and display details of the schema, including the fields and data types, as well as the attestations that have been made using that schema.

## Why use EAS Scanner?
EAS Scanner provides a simple and convenient way to search for and view attestations made using EAS and the global schema registry. Additionally, EAS Scanner can be used to learn more about the schemas and data being attested on the Ethereum blockchain, and can help developers to better understand the capabilities of EAS and the global schema registry.


![Easscan Website](/img/eas-scan.png)

### Use EAS Scan to:

```bash
- Search for attestation schemas 
- Create new Schemas using the UI
- Verify off-chain attestations
- Create schemas
- Make attestations
- View attestation transaction data
```

### Tips

:::tip You can also use the [API](https://easscan.com/) to query for attestations and schemas.
:::