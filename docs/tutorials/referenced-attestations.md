---
sidebar_position: 3
---

# Referenced Attestations
`refUID` is one of the most powerful features of EAS attestations that unlocks their composability by allowing one attestation to reference another.

This functionality enables the creation of a hierarchy or a chain of attestations that depend on one another. By doing so, attestations can be organized in a more structured manner and their relationships can be easily understood.

## Concept
An attestation can reference another attestation by including its unique identifier (UID) as the refUID field in the new attestation. The referenced attestation serves as a basis or prerequisite for the new attestation. This relationship can be used to represent dependencies between attestations, where one attestation's validity or relevance is contingent upon the existence and validity of another.

### Examples of when to use referenced attestations:
- **Chain of record:** For instance, in real estate transactions, referenced attestations can be used to track title transfers by linking previous and current owners.
- **Comprehensive view:** Referenced attestations can be used to create a structured view of data, where one attestation provides a broader context for the information in another attestation.
- **Approval systems:** In cases where multiple parties need to approve a decision or action, referenced attestations can be used to gather and track approvals, with each approval referencing the original proposal attestation.
- **Disputes:** When an attestation is disputed, a new attestation can reference the original one, indicating that there is a disagreement about its content or validity.
- **Version control:** If an attestation's data is updated or revised, a new attestation can reference the previous version, creating a clear history of changes.

### Practical Example
When you post something on social media, you are attesting to the content you put out there. Once it’s out there, other people can attest if they like it, want to share it, or more. The main attestation that is being referenced is the post UID. Then other users would use a schema for replying to or liking the post. They would reference the original UID of the post. Then other people could also reference the post UID and like the content and more.

### Creating a Referenced Attestation
To create a referenced attestation, the attester must include the UID of the attestation they wish to reference in the refUID field of the new attestation. The EAS.sol contract ensures that the provided refUID exists in the system, and the new attestation will be created with a reference to the specified attestation.

```bash solidity
Attestation memory newAttestation = Attestation({
    schema: schema,
    recipient: recipient,
    attester: attester,
    time: time,
    expirationTime: expirationTime,
    revocable: revocable,
    refUID: refUID,
    data: data,
    uid: uid
});
```
### Referencing Multiple Attestations
If you need to reference multiple attestations in a single attestation, you can use a schema that has an address field as an array that accepts bytes32 data. This field can be used to accept an array of the UIDs of the previous attestations you want to reference.

To reference multiple attestations, you can pass an array of UIDs as the value of the refUID field in the new attestation. The EAS.sol contract ensures that all of the provided UIDs exist in the system, and the new attestation will be created with references to all of the specified attestations.

## Conclusion
Referenced attestations are a powerful feature in the Ethereum Attestation Service, allowing users to create and manage attestations that depend on one another. By utilizing referenced attestations, developers can create more structured and easily verifiable attestation systems on the Ethereum blockchain.