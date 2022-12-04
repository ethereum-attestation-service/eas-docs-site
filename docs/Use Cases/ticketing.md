---
sidebar_position: 8
---

#  🎟️ Verified Ticketing


## Problem
Ticket scalping and fraud are major issues in the event ticketing industry. Scalpers often buy large quantities of tickets and resell them at inflated prices, while fraudulent tickets can be easily copied or counterfeited, leading to lost revenue and disappointed customers. Traditional methods of ticket verification, such as QR codes and barcodes, can be easily forged or copied, making it difficult to ensure the authenticity of a ticket.

## Solution
Ethereum Attestation Service (EAS) can be used to create a secure and transparent system for verifying the authenticity of event tickets. By leveraging the immutability and decentralization of the blockchain, EAS can allow event organizers to create cryptographically signed attestations of their tickets, which can then be verified by attendees and ticketing platforms. This provides a more robust and secure way to verify the authenticity of tickets, and can help to prevent scalping and fraud.

## Example
An event organizer can create attested claims for each ticket they sell, which will be cryptographically signed and added to the blockchain.

For example, let's say that the organizer of the "Summer Music Festival" wants to sell 100 tickets for their event. They create a decentralized identity for themselves using a UI built on EAS, and then create 100 attested claims, each representing a valid ticket for the festival. These attested claims are then cryptographically signed and added to the blockchain, where they can be easily verified by ticket holders and event staff.


### Here's a few example ticketing applications that could be built:
1. A **decentralized ticketing platform** that allows event organizers and ticket sellers to create, issue, and verify attested tickets using EAS. This platform could be integrated with existing ticketing systems to provide a secure and transparent way to verify the authenticity of tickets and prevent fraud.

2. A **mobile app** that allows ticket holders to securely store and manage their attested tickets using EAS. This app could be used to easily and securely share attested tickets with event organizers and ticket sellers, enabling more convenient and efficient verification of the tickets.

3. A **smart contract** that automatically verifies the authenticity of attested tickets using EAS. This smart contract could be integrated with blockchain-based ticketing platforms and other systems to enable more automated and transparent verification of ticket legitimacy.


## Example schema
1. `eventName`: The name of the event that the ticket is for.
2. `ticketNumber`: The unique number of the ticket.
3. `ticketHolder`: The name of the ticket holder.

## Example attestation
```jsx
{
  "eventName": "Summer Music Festival",
  "ticketNumber": "1234",
  "ticketHolder": "Jane Doe"
}
```

## Example business ideas
1. **TicketBop** - a platform that uses EAS to verify and authenticate event tickets, reducing fraud and providing a secure, transparent ticketing process for event organizers and attendees.
2. **FastPass** - a mobile app that leverages EAS to enable users to quickly and easily access event venues and venues, eliminating the need for physical tickets and reducing line wait times.
3. **TicketScan** - a service that uses EAS to provide real-time tracking and verification of ticket sales and transfers, helping event organizers to monitor and control their ticket distribution.
4. **TicketChain** - a blockchain-based platform that uses EAS to create a transparent, verifiable record of ticket ownership, enabling event organizers and attendees to securely and easily transfer tickets.
5. **TicketShield** - a service that uses EAS to provide insurance for event tickets, protecting attendees from unexpected cancellations and other unforeseen events.

## Future composability
The future composability of Ethereum Attestation Service (EAS) in the ticketing industry could enable a wide range of innovative and flexible solutions for verifying the authenticity of tickets.

For example, EAS could be used to create and verify multiple types of attestations for tickets, such as attested claims about a ticket's origin, authenticity, and transfer history. These different types of attestations could be used together in various ways to create a greater ticketing ecosystem, with each attestation serving a different purpose and providing a unique layer of trust and transparency.

One potential application of this composability is the use of origin attestations to verify the source of a ticket. This could be used to prevent the sale of counterfeit or fraudulent tickets, as event organizers could create origin attestations for their tickets and require that these attestations be present in order for a ticket to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the origin attestations and ensure their integrity.

Another potential application of composability is the use of authenticity attestations to verify the legitimacy of a ticket. This could be used to prevent the use of copied or duplicated tickets, as event organizers could create authenticity attestations for their tickets and require that these attestations be present in order for a ticket to be considered valid. This could be done using advanced cryptographic techniques and other decentralized technologies to securely and transparently verify the authenticity attestations.

Finally, the use of transfer attestations could enable a more transparent and secure way to transfer tickets between ticket holders. This could be used to prevent the resale of tickets at inflated prices, as event organizers could create transfer attestations that limit the number of times a ticket can be transferred and require that these attestations be present in order for a ticket to be considered valid. This could be done using smart contracts and other decentralized technologies to automatically verify the transfer attestations and ensure their integrity.

Overall, the future composability of EAS for ticketing could enable a wide range of innovative and flexible solutions for verifying the authenticity of tickets, providing greater trust and transparency in the ticketing ecosystem.