---
sidebar_position: 19
---

# Transparent Funding
How attestations can be used to create more transparency in funding public goods, grants, and hackathon competitions.

## Problem
The current systems for funding public goods, grants, and hackathons often lack transparency, making it difficult to independently verify decisions, votes, and the use of funds. This creates opportunities for fraud, corruption, and inefficiencies in the distribution of resources.

For example, in the case of public goods funding, there may be a lack of clarity around which projects are eligible for funding and how those decisions are made. In the case of grants, it can be challenging to ensure that the funds are being used for their intended purposes. In hackathon competitions, it may not be clear who can vote, how the voting process is conducted, or how the funds are allocated to the winning projects.

## Opportunity
Attestations provide a solution to these challenges by enabling more transparent and auditable funding mechanisms for public goods, grants, and hackathons. By using attestations, it is possible to create a verifiable record of project eligibility, voting, funding, and project compliance.

For example, project eligibility can be established through attestations of skills, experience, or reputation. Voting can be conducted using attestations of identity, reputation, or other criteria, with the results being recorded on Ethereum. Funding can be distributed using attestations of milestones achieved or services rendered. Compliance can be ensured through attestations of project progress or the use of funds, as well as through audits or inspections of attested records.

## Example
Let's say a grant program wants to use attestations to verify the eligibility and progress of its projects. The program could require each project to submit an attestation of their qualifications and experience, which would then be reviewed and attested by independent validators. Once the projects are approved, the program could use attestations to track their progress and ensure that the funds are being used for their intended purposes.

For instance, each project could submit attestations of their milestones achieved, with validators attesting to the completion of each milestone. The program could then distribute the funds based on these milestones, with attestations of funds received and milestones achieved serving as proof of progress and compliance. Audits could also be conducted using the attested records to ensure that the funds are being used appropriately.

### Sample Schema
```
//Grant Proposal Request
string projectName
string description
address beneficiary
uint256 amountRequested
uint64 submittedTime
bytes32 proposalHash

//Grant Milestone
bytes32 projectId
bytes32 milestoneId
uint256 amount
bool isCompleted
```

## Future Composability
By using attestations to create more transparent and auditable funding mechanisms, it is possible to build a more accountable and efficient system for distributing public goods, grants, and hackathon funds. These attestations can also be used in combination with other Web3 technologies, such as decentralized identity systems and smart contracts, to create more sophisticated and automated funding mechanisms.

For example, attestations could be used to verify the identity and reputation of voters in quadratic voting systems for hackathons. They could also be used to enable decentralized decision-making in funding mechanisms, with attestations of stake or reputation determining the weight of each voter's decision. Overall, attestations provide a powerful tool for creating more transparent and equitable funding mechanisms in Web3.


