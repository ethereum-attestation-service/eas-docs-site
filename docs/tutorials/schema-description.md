---
sidebar_position: 11
---

# Schema Descriptions
The clarity and understanding of schemas play a pivotal role. A schema description not only provides context but also ensures that the data being attested to is understood universally. This document will guide you through the importance of schema descriptions, the design choices made by EAS, and a step-by-step tutorial on how to attest to your schema description.

:::tip Start a discussion
Use the EAS Forum to start a discussion on any schemas you want feedback and collaboration on
:::

## Design Choice: Where Descriptions Should Live
EAS made an explicit design choice not to add this at the protocol level because it adds unnecessary complexity and costs. It would be constraining to presuppose the types of data people may want to associate with schemas and then hard-code that inside the protocol itself. Designing the protocol with minimum complexity makes the protocol more flexible and future-proof.

Keeping things like names, descriptions, context, etc. out of the protocol layer means that data formats, standards, and conventions regarding schema coordination can be made by the community without having to upgrade the protocol itself.

Using referenced attestations and attesting to descriptive attributes creates a much more free, dynamic, and less constrained protocol that makes building much simpler and easier for developers.

## Why Descriptions Are Important
- **Universal Understanding:** A well-described schema ensures that anyone interacting with the data, regardless of their prior knowledge, can understand its structure and purpose.
- **Data Integrity:** Clear descriptions prevent misinterpretations, ensuring that the data adheres to its intended format and semantics.
- **Enhanced Collaboration:** When multiple entities or developers work with the same schema, a clear description ensures everyone is on the same page, reducing errors and streamlining collaboration.

## How It Works
Instead of embedding descriptions within the schema, EAS uses a referenced attestation. Here's a brief overview:

1. Every schema registered with EAS is assigned a unique identifier (UID).
2. When you want to provide a description for a schema, you create an attestation that references the schema's UID.
3. This attestation serves as the schema's description, and anyone wanting to understand the schema can retrieve this attestation using the schema's UID.

## Attesting To Your Description
1. Before you can add a `description` you will need the `UID` of the schema you created. Note - you must use the same `creator` address that made the schema to set the description.
2. Draft a clear and consie description for your schema. This should explain the schema's purpose and any relevant information. This is an unformatted string. If more text formatting is necessary, you should reference to a markdown page or link to the discussion forum (if used).
3. Create an attestation using the `Schema Description` schema on any chain [https://sepolia.easscan.org/schema/view/0x21cbc60aac46ba22125ff85dd01882ebe6e87eb4fc46628589931ccbef9b8c94](https://sepolia.easscan.org/schema/view/0x21cbc60aac46ba22125ff85dd01882ebe6e87eb4fc46628589931ccbef9b8c94).
    - You do not need to add a `recipient`
    - Add the `UID` of the schema you are naming
    - Type in your short description
    - Make sure you click `onchain` to register the Schema Description `onchain`

## Wrapping Up
Schema descriptions are a vital aspect of ensuring clarity and understanding in the world of attestations. Keeping descriptions separate from the schema struct allows EAS to offer a flexible, simple, and modular approach. With the steps outlined above, you can easily attest to your schema descriptions, ensuring that your data is universally understood and trusted.