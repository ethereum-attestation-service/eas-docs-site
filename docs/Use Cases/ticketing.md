---
sidebar_position: 8
---

#  🎟️ Verified Ticketing

## Problem
Ticket scalping and fraud are major issues in the event ticketing industry. Scalpers often buy large quantities of tickets and resell them at inflated prices, while fraudulent tickets can be easily copied or counterfeited, leading to lost revenue and disappointed customers. Traditional methods of ticket verification, such as QR codes and barcodes, can be easily forged or copied, making it difficult to ensure the authenticity of a ticket.

## Solution
Ethereum Attestation Service (EAS) can be used to create a secure and transparent system for verifying the authenticity of event tickets. By leveraging the immutability and decentralization of the blockchain, EAS can allow event organizers to create cryptographically signed attestations of their tickets, which can then be verified by attendees and ticketing platforms. This provides a more robust and secure way to verify the authenticity of tickets, and can help to prevent scalping and fraud.

## Example
An event organizer can create attestations for each ticket they sell, which will be cryptographically signed and added to the blockchain.

For example, let's say that the organizer of the "Summer Music Festival" wants to sell 100 tickets for their event. They create 100 attestations, each representing a valid ticket for the festival. These attestations are then cryptographically signed and added to the blockchain, where they can be easily verified by ticket holders and event staff.

The ticket holder could present their attested ticket in a number of ways, such as displaying it on their mobile device or printing it out. The event staff or ticket sellers would then be able to verify the authenticity of the ticket by checking the attestation on the blockchain. This process would provide a secure and transparent way for event organizers and attendees to verify the authenticity of tickets and prevent fraud.

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
The use of EAS in the ticketing industry has the potential to enable a wide range of innovative and flexible solutions for verifying the authenticity of tickets.

For example, EAS could be used to create and verify multiple types of tickets, such as VIP tickets, early bird tickets, and discount tickets, each with their own unique attributes and verification requirements. This would provide event organizers with more control and flexibility in managing their ticket sales and distribution.

In addition, EAS could be integrated with other blockchain-based platforms and services to enable more advanced functionality and functionality, such as automated ticket refunds, resale markets, and insurance services. This could provide attendees with more options and protections when purchasing and using event tickets, and could also help to further prevent scalping and fraud.

Overall, the future composability of EAS in the ticketing industry has the potential to improve the security, transparency, and efficiency of the event ticketing process, benefiting both organizers and attendees alike.