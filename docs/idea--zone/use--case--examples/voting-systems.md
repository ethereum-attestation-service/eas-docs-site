---
sidebar_position: 5
---

# Voting Systems

## Problem
Current voting systems often suffer from fraud, misrepresentation, and a lack of transparency. Tokenized voting systems, such as those used in many DAOs, can also suffer from voter apathy, where those with more tokens have more say, creating unequal and unfair outcomes. These issues make it difficult to trust the outcome of any vote, which undermines the entire concept of democracy.

## Opportunity
Attestations offer a secure and transparent way to implement digital voting systems. With attestations, voters can be verified as unique individuals, and their votes can be recorded in a way that is tamper-proof, immutable, and transparent.

Voting systems that use attestations can be flexible and customizable, allowing for different voting mechanisms like quadratic voting systems or one person one vote. It can be used for both online communities and national elections, allowing for fair and democratic voting that can be audited and verified by anyone.

## Example
Let's say a DAO needs to elect new leaders. Each member of the DAO has a specific membership attestation. To vote, members can make an attestation, or vote, for the candidate they want to elect. The voting process would be open and transparent, with each vote recorded on the blockchain. Once the voting period closes, the votes can be tallied based on the attestations made. The quadratic voting system would ensure each member has an equal say in the outcome, and the use of attestations would ensure the integrity and transparency of the election.


## Sample Schema
This is an example schema. The attestor (DAO member) would make an attestation to the candidate address, which would simply be the recipient of the attestation. Then the DAO member would cast the # of votes they want to allocate to that candidate and their role.

To make the process even more efficient and scalable, we can use tuples to map the candidate ID and the number of votes they received. This will allow for easy vote counting and tallying. The schema would look like this:

```jsx
uint64 votes
bytes32 roleID
```

We would like to give a special shoutout to the Devfolio (ETHIndia) team who implemented a quadratic voting system for their recent hackathon. They used an attestation-based voting system with quadratic voting to have a more transparent and verifiable voting process. We believe that this is just the beginning of the potential for attestations to transform voting systems and enable more democratic decision-making.

[Learn more about Devfolio's Quadratic Voting System using Attestations](https://devfolio.co/blog/introooducing-quadratic-voting-on-devfolio/)

## Future Composability 
Attestations have the potential to unlock many new use cases for digital trust online. By enabling more secure and transparent voting systems, we can rethink and evolve traditional voting systems to be more fair and democratic. As digital identities become more robust through the use of attestations, voting systems will become easier to implement, and the potential for future composability will be limitless. This will allow for more advanced reputation systems, improved decision-making processes, and the ability to unlock new use cases beyond what is currently possible.