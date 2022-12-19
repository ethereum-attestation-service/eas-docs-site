---
sidebar_position: 17
---
# Quadratic Funding

## Problem
Quadratic funding is a system for allocating funds to public goods or projects based on the preferences of the individuals or organizations contributing to the funding pool. However, traditional quadratic funding systems can be difficult to administer and can be vulnerable to fraud or manipulation.

## Solution
EAS provides a decentralized solution for securely creating, storing, and verifying attestations about the eligibility of quadratic funding applicants. With EAS, funding pool administrators and applicants can create and verify attestations about their eligibility, providing a secure and transparent way to verify the information and streamline the funding allocation process.

## Example
An attestation schema can be created that defines the criteria for eligibility to receive funding from a quadratic funding pool, such as being a registered non-profit organization or having a certain level of support from the community. An applicant seeking funding from the pool can then use the attestation service to create an attestation with this schema and provide the necessary information to demonstrate their eligibility. The attestation could be cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of the applicant's eligibility.

When the applicant submits their funding request, they can include the attestation along with their other supporting documents. The funding pool administrators can then use the attestation service to verify the attestation and check the data contained in it against the data on the blockchain. The funding administrators could then issue an attestation about the status of the application and if the project is eligible or not. 

## Example schema
``` bash
string applicantName;
address applicantAddress;
bool isRegisteredNonProfit;
uint256 communitySupportScore;
```

## Example attestation
```bash
applicantName: "Bob's Non-Profit"
applicantAddress: "0x1234567890abcdef"
isRegisteredNonProfit: true
communitySupportScore: 80
```

# Example application ideas
1. **FundFlow** - A decentralized platform that uses EAS to streamline the process of allocating funds to public goods and projects based on the preferences of the community. FundFlow enables users to securely verify their eligibility to receive funding and transparently track the allocation of funds.
2. **QuadFund** - A fintech company that uses EAS to provide secure and transparent attestation of the eligibility of individuals and organizations to receive funding from quadratic funding pools. QuadFund enables users to easily verify their credentials and build trust with funders.
3. **CrowdFundX** - A crowdfunding platform that uses EAS to quickly and accurately verify the eligibility of project creators to receive funding from the community. CrowdFundX provides a secure and transparent way for users to support the projects they believe in.
4. **QuadCoin** - A blockchain-based lending platform that uses EAS to automate the verification of borrowers' eligibility to receive funding from quadratic funding pools. QuadCoin enables users to easily access financing for their public goods and projects.
5. **FundTrust** - A decentralized reputation system that uses EAS to verify the credibility and reliability of individuals and organizations seeking funding from quadratic funding pools. FundTrust enables users to build and maintain a trusted reputation on the Ethereum blockchain.

## Future composability
As more and more quadratic funding schemas are registered on EAS, users will be able to easily compose these schemas together to create more complex and specific schemas that are tailored to the needs of different public goods and projects. For example, a schema for funding environmental projects could be composed of several individual schemas, such as a schema for verifying the eligibility of the project creator, a schema for verifying the environmental impact of the project, and a schema for verifying the sustainability of the project.

These composed schemas could be used by individuals and organizations seeking funding for public goods to create and verify attestations about their eligibility and the merits of their projects. The trustless and transparent nature of the Ethereum blockchain, combined with the composability of the schemas on EAS, could enable a more efficient and fair allocation of funds to public goods.

Additionally, the interoperability of EAS with other decentralized reputation systems and blockchain-based lending platforms could enable more advanced and flexible solutions for quadratic funding. For example, a reputation system could be used to verify the credibility and reliability of individuals and organizations seeking funding, and a lending platform could be used to automate the verification of funding requests and the allocation of funds.

Overall, the composability of quadratic funding schemas on EAS could evolve over time to create a powerful and trustless ecosystem for allocating funds to public goods.
