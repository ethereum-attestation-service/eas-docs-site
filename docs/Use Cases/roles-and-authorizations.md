---
sidebar_position: 3
---

# Roles & Authorizations

## Problem
Current centralized platforms like Discord and others pose significant challenges to achieving true decentralization for communities, particularly in terms of community management and authorizations. Membership tokens are often transferable, bad actors and spam can easily disrupt community progress, and reputation systems and voting systems are centralized in the platform.

## Opportunity
Decentralized communities can take ownership of their governance and generate more honest and transparent opportunities through the use of attestations. Using EAS, communities can create customizable schemas to define community roles and responsibilities. With attestation-based management, community members can be authorized to perform specific tasks based on their unique skills, experience, and reputation within the community. Attestations also promote transparency and accountability, enabling members to self-manage without the need for centralized authorities or systems, while reducing fraud and fostering trust.

## Example
When Alice joins the DAO as a solidity engineer, the organization creates an immutable but revocable attestation that allows her to access the community. This attestation contains information about Alice's assigned "roleID" and the "teams" she is a part of. If Alice's role or status changes, the DAO can revoke the attestation, effectively cutting off her access.

The great thing about this system is that Alice has a permanent record of being a member of the DAO, while the organization can still maintain control over who has access to its resources. Revoking access could be necessary if someone is behaving badly, not contributing enough, or if their role changes in the organization.

## Sample Schema
```bash jsx
bytes32 roleID
bytes32[] authorizations
bytes32 memberID
```

## Future Composability 
With attestations, DAOs can attest to other aspects of their members' engagements in the community. For example, a DAO could create an attestation for a member's level of participation, such as the number of proposals made, the number of votes cast, or the amount of work contributed. Members can then use these attestations to prove their participation and involvement in the community.

In addition, authorizations can be used for other permissions besides access to the community, such as voting, approvals, and decision-making. Attestations can also be used to create reputation systems that help members build trust and recognition within the community, leading to more opportunities and collaborations. As EAS is a customizable and versatile platform, the possibilities for future composability are endless.





