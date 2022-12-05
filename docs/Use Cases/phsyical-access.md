---
sidebar_position: 4
---

#  🔑 Physical Access

## Problem
Traditionally, physical access to buildings and other restricted areas has been granted using physical keys or badges. This approach has several drawbacks, including the potential for keys to be lost or stolen, and the inconvenience of having to carry around physical keys or badges. In addition, the process of issuing and revoking access can be time-consuming and error-prone.

## Solution
EAS can be used to provide a secure and convenient solution for granting and managing physical access to buildings and other restricted areas. By creating and verifying attestations about a user's identity and access permissions, EAS can enable individuals to securely access buildings and restricted areas using their digital identity.

## Example
One way that attestations and EAS could be used for user identity in physical locations is by creating an attestation schema that defines the data fields and types that are relevant to user identity, such as name, email, address, and government-issued ID number. Organizations that need to verify user identity, such as banks, airports, or government agencies, could use the attestation service to issue attestations to users who have provided the necessary proof of identity.

These attestations could then be stored on the user's Ethereum wallet and presented to the organization when needed. The organization could verify the attestation by checking the cryptographic signature and the data contained in the attestation against the corresponding data on the blockchain. This process would provide a secure and verifiable way for users to prove their identity in physical locations.

## Example schema 
``` bash
bytes32 fullName;
bytes32 accessPermissions;
uint256 expirationDate;
```

## Example attestation
``` bash
fullName: "Alice Smith"
accessPermissions: "Full access to building"
expirationDate: 1620982400

```

## Example business ideas
1. **SafeSpace** - a service that uses EAS to verify and grant access to shared office spaces for remote workers.
2. **FitPass** - a gym membership service that uses EAS to verify member eligibility and grant access to fitness facilities.
3. **DrivingTrust** - a car rental company that uses EAS to verify driver eligibility and grant access to rental vehicles.
4. **TicketGuard** - a ticketing service that uses EAS to verify event attendees and grant access to live events.
5. **TrustPass**: A digital identity and access management solution that uses EAS to verify the identities and eligibility of employees, contractors, and visitors, allowing businesses to grant secure access to their facilities.

## Future composability
In the future, the composability of a physical access schema built on Ethereum Attestation Service (EAS) could enable more advanced and flexible solutions for verifying identity and granting access. Additional schemas could be built on top of the physical access schema, such as for verifying credentials or proof of ownership, to create a powerful and comprehensive system for managing access and identity.

By leveraging the interoperability of EAS, these different schemas could work together smoothly, allowing for the creation of new, more powerful solutions for managing access and identity. This could enable users to build and maintain a trusted and verifiable reputation on the Ethereum blockchain, providing a secure and transparent way to verify identity and grant access.