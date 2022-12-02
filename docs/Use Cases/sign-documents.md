---
sidebar_position: 12
---

#  📄 Sign Documents

## Problem
Managing digital signatures and verifying the authenticity of signed documents can be a challenging and time-consuming task. Traditional methods of signing documents, such as using password-protected PDFs or handwritten signatures, can be insecure and prone to tampering or fraud. This can create risks for organizations that need to sign and manage large numbers of documents, such as contracts, agreements, or legal documents.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely signing and verifying documents. By leveraging the immutability and decentralization of the blockchain, EAS allows organizations to create and manage digital signatures for their documents, which can then be verified by other parties. This provides a more secure and transparent way to sign and verify documents, and can help to prevent fraud and tampering.

## Example
To use EAS for signing an employment agreement, the employer and employee can create attested claims for the agreement, which will be cryptographically signed and added to the blockchain.

For example, let's say that John is starting a new job at XYZ Corporation. The employer creates an attestation of the employment agreement, which includes the agreement's details and their digital signature. This attestation is cryptographically signed and added to the blockchain, where it can be verified by John and any other parties involved in the employment process. Similarly, John can create an attestation of the employment agreement that includes his digital signature, and this attestation can also be added to the blockchain.

Once the employment agreement has been signed by both the employer and John, the attested claims on the blockchain can be used to verify the authenticity of the agreement and the signatures of both parties. This provides a secure and transparent way to manage the signing of the employment agreement, and can help to prevent fraud or tampering.


### Here's a few example ticketing applications that could be built:
1. A **decentralized document signing platform** that allows organizations and individuals to create, sign, and verify attested documents using EAS. This platform could be integrated with existing document management systems to provide a secure and transparent way to sign and verify documents, and prevent fraud and tampering.

2. A **mobile app** that allows users to securely store and manage their attested documents using EAS. This app could be used to easily and securely share attested documents with others, enabling more convenient and efficient verification of the documents.

3. A **smart contract** that automatically verifies the authenticity of attested documents using EAS. This smart contract could be integrated with blockchain-based document signing platforms and other systems to enable more automated and transparent verification of document signatures.

4. A **legal document signing service** that uses EAS to securely sign and verify contracts, agreements, and other legal documents. This service could be used by individuals and organizations to manage the signing of legal documents, and provide a secure and transparent way to verify the authenticity of the documents and signatures.

5. A **medical record signing platform** that uses EAS to securely sign and verify medical records and other health-related documents. This platform could be used by healthcare providers and patients to manage the signing of medical documents, and provide a secure and transparent way to verify the authenticity of the documents and signatures.


## Example schema
1. `documentName`: The name of the document being signed.
2. `documentHash`: The cryptographic hash of the document's content.
3. `signature`: The digital signature of the document.

## Example attestation
```jsx
{
  "documentName": "Contract for Legal Services",
  "documentHash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  "signature": "0x9a8b7c6d5e4f3g2h1i9j8k7l6m5n4o3p2q1r0s"
}
```


## Future composability
The future composability of Ethereum Attestation Service (EAS) in the ticketing industry could enable a wide range of innovative and flexible solutions for verifying the authenticity of tickets.

For example, EAS could be used to create and verify multiple types of attestations for tickets, such as attested claims about a ticket's origin, authenticity, and transfer history. These different types of attestations could be used together in various ways to create a greater ticketing ecosystem, with each attestation serving a different purpose and providing a unique layer of trust and transparency.

One potential application of this composability is the use of origin attestations to verify the source of a ticket. This could be used to prevent the sale of counterfeit or fraudulent tickets, as event organizers could create origin attestations for their tickets and require that these attestations be present in order for a ticket to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the origin attestations and ensure their integrity.

Another potential application of composability is the use of authenticity attestations to verify the legitimacy of a ticket. This could be used to prevent the use of copied or duplicated tickets, as event organizers could create authenticity attestations for their tickets and require that these attestations be present in order for a ticket to be considered valid. This could be done using advanced cryptographic techniques and other decentralized technologies to securely and transparently verify the authenticity attestations.

Finally, the use of transfer attestations could enable a more transparent and secure way to transfer tickets between ticket holders. This could be used to prevent the resale of tickets at inflated prices, as event organizers could create transfer attestations that limit the number of times a ticket can be transferred and require that these attestations be present in order for a ticket to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the transfer attestations and ensure their integrity.

Overall, the future composability of EAS for ticketing could enable a wide range of innovative and flexible solutions for verifying the authenticity of tickets, providing greater trust and transparency in the ticketing ecosystem.