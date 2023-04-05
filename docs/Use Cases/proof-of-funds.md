---
sidebar_position: 9
---

# Proof of Funds

## Problem
In the world of finance, proving funding can be a time-consuming and invasive process. Financial institutions often require a significant amount of documentation to verify that an individual or entity has sufficient funds for a transaction. The process can be challenging for individuals and businesses, as it often requires sharing sensitive financial information that could be at risk of exposure.

## Opportunity
Proof of funds attestations can provide a secure and efficient way to verify the funding status of an individual or entity without requiring the disclosure of sensitive information. By using private data attestations with Merkle Trees, users can selectively disclose specific data fields, such as the current cash balance or credit score, while keeping other information private. This allows for a more tailored approach to information sharing, reducing the risk of fraud or errors and streamlining the verification process.

## Example
Alice wants to make a cash offer on a new home, but first, she must prove that she has sufficient Proof of Funds to pay for it.

Bob's Regional Bank creates a private data attestation for Alice's known wallet address, including details such as her current cash balance, whether she has over $100k, and her credit score.

Bob's Regional Bank attests to the private data, which generates a Merkle tree root hash of all the fields. The created attestation only contains the "Private Data" bytes32 value representing the Merkle tree root. This "Private Data" is accessible exclusively to the original attestor address or those who have received and verified any proof of the data. Once the attestation is made, Bob's Bank can provide Alice with the entire data from the tree which will allow her to generate proofs from it.

Alice generates a proof/leaf for the desired data field. In this case, Alice wants to share her legal name and confirm that her balance is over $100k. By clicking 'Generate Proof,' she obtains the 'Proof Result.'

The provided proof can be verified against the attested Merkle tree root hash, ensuring secure confirmation of the disclosed data without exposing the entire dataset.

With this approach, Alice can selectively disclose specific parts of her encoded data by generating a proof/leaf for the desired data field, while maintaining the overall privacy of her attested data.


## Sample Schema
This sample schema for "Proof of Funds" includes only two fields: `requestedAmount` and `hasSufficientFunds`.

- The `requestedAmount` field represents the amount of funds that are being requested for a particular transaction, such as purchasing a home.
- The `hasSufficientFunds` field is a boolean value that indicates whether the individual or entity has sufficient funds to cover the requested amount.

This approach reduces the amount of sensitive financial information that needs to be shared, as only the requested amount and whether it can be covered are needed, increasing the overall privacy and security of the transaction.

```bash jsx
uint256 requestedAmount
bool hasSufficientFunds
```

[Read a more detailed explaination of how this could work.](https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF/BiFUEFJKo6ZsIvPwsP9WPC2UZX0-x_9BdtrvmQo1FwY)

## Future Composability 
Proof of funds can be used in various transactions such as buying a car, home or even extending to Proof of Reserves for companies to verify they have sufficient assets to cover user funds.