---
sidebar_position: 11
---

# 🏠 Mortgage loans

## Problem
The mortgage loan process can be complex, time-consuming, and vulnerable to fraud and errors. Traditional methods of verifying a borrower's creditworthiness, income, and other factors that are relevant to their loan application often involve manual processes and physical documentation, which can be slow and prone to errors.

## Solution
EAS can streamline the mortgage loan process. With EAS, the various parties involved in the process can make attestations about the status of the application, providing a secure and transparent way to track and verify the progress of the application.

## Example
Alice is applying for a mortgage to buy a house. She uses EAS to manage the mortgage application process, and receives attestations from the various parties involved in the process. For example, her credit score provider may make an attestation about her credit score, her employer may make an attestation about her income and employment status, and the property appraiser may make an attestation about the value of the property.

These attestations are cryptographically signed and added to the Ethereum blockchain, where they can be easily verified by the mortgage provider. The mortgage provider can then use these attestations to quickly and securely verify the information in Alice's application, and make an informed decision about whether to approve her mortgage.

Additionally, the use of EAS in the mortgage application process can enable new and innovative use cases, such as real-time application tracking, automated underwriting, and digital closing. For example, Alice could use EAS to track the progress of her mortgage application in real-time, and receive notifications when new attestations are made by the various parties involved in the process. This could provide her with greater transparency and control over the application process, and could also enable new features and services that require verified mortgage information.

## Example schema
``` bash
string applicantName;
bytes32 creditScore;
string employmentStatus;
unit256 income;
string propertyAddress;
unit256 propertyValue;
string mortgageAmount;

```

## Example attestation
``` bash
applicantName: "Alice Smith"
creditScore: 750
employmentStatus: "Full-time"
income: 100000
propertyAddress: "123 Main St, Anytown USA"
propertyValue: 500000
mortgageAmount: 400000

```
## Example business ideas
1. **LendEasy** - A fintech company that uses EAS to streamline the mortgage application process by securely verifying a borrower's identity and financial information.
2. **HomeSafe** - A mortgage lender that uses EAS to provide transparent and secure attestation of a borrower's credit score and income information.
3. **MortgageGenius** - A mortgage broker that uses EAS to easily share a borrower's verified employment history and asset information with multiple lenders.
4. **LoanClear** - A mortgage underwriting company that uses EAS to quickly and accurately verify a borrower's property ownership and income tax records.
5. **MortgageBrite** - A mortgage servicing company that uses EAS to securely track and verify a borrower's payment history and creditworthiness over time.


## Future composability
In the future, the composability and interoperability of Ethereum Attestation Service (EAS) could enable more advanced and flexible solutions for verified mortgage applications.

Additionally, EAS could be integrated with decentralized reputation systems, such as DRep (Decentralized Reputation) and DRA (Decentralized Rating Agency), to enable users to build and maintain a trusted and verifiable reputation on the Ethereum blockchain. This could be used to verify the credibility and reliability of users and organizations, and to enable more efficient and trust-based interactions on the Ethereum network.

EAS could be integrated with smart contracts and blockchain-based lending platforms to enable more automated and transparent verification of a borrower's creditworthiness and income. For example, a smart contract could be used to automatically verify a borrower's attestations and determine their eligibility for a specific mortgage loan product. This could be used to enable more efficient and secure lending, while also providing a transparent and verifiable record of the loan application process.
