---
sidebar_position: 12
---

# Verified Ticketing

## Problem
Ticket scalping, counterfeit tickets, and unauthorized access to events are common problems in the event industry. Traditional ticketing systems often require multiple intermediaries, which can result in additional costs, longer wait times, and increased potential for fraud.

## Opportunity
Off-chain attestations using EAS can provide a secure and efficient way to manage ticketing systems. By creating an attestation for each ticket, users can selectively disclose specific data fields, such as the ticket type, owner, and event information while keeping other information private. This allows for a more tailored approach to information sharing, reducing the risk of fraud or errors and streamlining the verification process.

## Example
Alice wants to attend a crypto conference and purchases a ticket from the event's website. The event organizers create an attestation for the ticket, including the ticket type, owner, and event information. The attestation is then made to Alice's Ethereum address, granting her permission to access the event.

Once Alice attends the event, the organizers can issue a proof of attendance attestation to her Ethereum address, confirming that she was present at the event. This proof of attendance can be used for future events, providing Alice with additional benefits, such as early-bird access or special discounts.

If Alice decides to sell her ticket, she can transfer ownership to the new owner by revoking the original ticket attestation and reissuing it to the new address, creating a chain of ownership and preventing the resale of counterfeit tickets.

## Sample Schema

```bash jsx
bytes32 eventID
bytes32 ticketID
```

## Future Composability
As the attestation ecosystem grows, ticketing systems can become even more robust and efficient. Proof of attendance can be extended to other events, such as concerts, sporting events, and festivals, providing attendees with additional benefits and rewards. Attendee attestations can also be combined with other attestations providing event organizers with additional information while maintaining user privacy. Overall, off-chain attestations with EAS have the potential to revolutionize the ticketing industry, making it more secure, efficient, and enjoyable for everyone involved.


