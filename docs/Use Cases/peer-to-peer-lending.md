---
sidebar_position: 6
---

# P2P Lending

## Problem
Current lending protocols in DeFi rely on over-collateralized loans, which limit access to credit for those who do not have sufficient collateral. This creates a barrier to entry for many people who could benefit from access to credit. Additionally, traditional credit scores are not applicable in DeFi, so it is difficult to establish trust between lenders and borrowers.

## Opportunity
Attestations offer a way to establish trust between lenders and borrowers in DeFi, paving the way for undercollateralized loans. By using attestations to establish creditworthiness and risk profiles, lenders can make informed lending decisions based on verifiable data.

This opens up new opportunities for peer-to-peer lending, enabling a wider range of people to access credit. It also has the potential to transform the traditional credit score system, by allowing individuals to build up a verifiable reputation over time through attestations.

## Example
Alice is looking for a loan to start her new business, but she does not have significant collateral to secure a loan. Bob, a lender, is interested in lending to Alice but needs to assess her risk profile. Bob can verify different attestations that matter to him, like Alice's employment history, payment record, and even a credit score attestation from a credit bureau. Alice can then be scored based on these factors and assigned a risk rating, allowing Bob to offer an undercollateralized loan with lower interest rates than traditional lending systems.

Bob can also use attestations to verify Alice's identity further assess her risk. Once the loan is issued, both Alice and Bob can track the loan payments on Ethereum, allowing for transparent and secure lending. As Alice makes on-time payments, her risk profile will improve, and she can access larger loans with better interest rates in the future. Each time a payment is made an additional attestation can be issued as a form of payment receipt. This payment receipt can then be used to form a composable and interoperable payment trail of her loans.

## Sample Schema
With this schema, a borrower can make an attestation for their loan request, which would include the relevant loan details such as the loan ID, principal, interest rate, and payment due date. Once the loan has been issued, the borrower would make another attestation for each payment made on the loan, referencing the loan ID and including the payment amount and date. Lenders can then use these attestations to verify the borrower's payment history and assess their creditworthiness for future loans.


```bash jsx
//The Loan
bytes32 loanID
address borrower
address lender
uint256 principal
uint256 interestRate
uint32 loanTerm
uint64 paymentDueDate
bytes32[] loanMetadata

//Loan Payment
bytes32 loanID
uint256 paymentAmount
uint64 paymentDate  
```

By using attestations for loan payments, lenders can have more confidence in lending to undercollateralized borrowers, as they can verify that the borrower has a history of making timely payments. This opens up new opportunities for peer-to-peer lending and undercollateralized loans in DeFi, as borrowers can now leverage their reputation to access credit without having to put up excessive collateral.

## Future Composability 
As more users adopt attestations for peer-to-peer lending, we can start to see the creation of a more robust reputation system for the DeFi space. This reputation system could be used in various DeFi applications to assess risk profiles, provide undercollateralized loans, and reduce collateral requirements. In addition, it could be used to track borrowers' payment histories and provide a novel credit score in the DeFi world. With attestations, we can help to create a more democratic and equitable lending system that promotes innovation and financial inclusion.

