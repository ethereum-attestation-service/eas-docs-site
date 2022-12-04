---
sidebar_position: 3
---

# 🥸 Digital Identitiy
Create and manage your own digital identity, attesting to claims about your identity on the Ethereum blockchain. This provides a secure and transparent way to prove your identity, and can be verified by anyone.

## Problem
Traditionally, online identity verification has relied on centralized systems and authorities, such as government-issued ID cards and utility bills. These systems can be slow, expensive, and vulnerable to fraud and identity theft.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a user's identity. With EAS, users can create and manage their own digital identity, attesting to claims about their identity using the Ethereum blockchain. These attested claims can be easily verified by any interested party, providing a secure and transparent way to prove the user's identity.

## Example
Alice wants to create a digital identity for herself using EAS. She creates a decentralized identity (DID) for herself using a UI built on EAS, and then creates attested claims about her identity, such as her name, date of birth, and address. These attested claims are then cryptographically signed and added to the blockchain, where they can be easily verified by others.

Alice can then use her digital identity to securely and transparently prove her identity to others. For example, she can use her digital identity to log in to online accounts, such as her email and social media accounts, without having to remember multiple passwords. She can also use her digital identity to securely share her personal information with others, such as her employer or doctor, without having to worry about her information being mishandled or misused.

Additionally, Alice's digital identity can be easily verified by others using EAS. For example, her employer can use EAS to verify the authenticity and accuracy of her attested claims, ensuring that they are dealing with the real Alice and not an imposter. This can help to prevent identity theft and fraud, and can also improve the efficiency and security of digital interactions.

## Example schema 
``` bash
string name;
bytes32 dob;
string address;
bytes32 phone;
string email;
string employer;
string occupation;
unit256 salary;

```

## Example attestation
```
name: "Alice Smith"
dob: "01/01/1980"
address: "123 Main St, Anytown USA"
phone: "123-456-7890"
email: "alice@example.com"
employer: "Acme Corporation"
occupation: "Software Engineer"
salary: 100000

```

## Example use cases to solve for
1. Verifying the identity of users on online platforms and services, such as online banks, social networks, and e-commerce websites. EAS allows these platforms to request and verify attested claims about a user's identity, providing a secure and transparent way to verify the user's identity.

2. Creating and managing digital identity credentials, such as government-issued ID cards, driver's licenses, and passports. EAS allows users to create and manage their own digital identity, attesting to claims about their identity using the Ethereum blockchain.

3. Verifying the authenticity of physical documents, such as birth certificates, university degrees, and professional licenses. EAS allows these documents to be attested and verified on the Ethereum blockchain, providing a tamper-proof and transparent record of their authenticity.

4. Providing proof of identity for government services, such as voting, taxation, and social benefits. EAS allows governments to securely store and verify attested claims about a user's identity, providing a more efficient and secure way to provide these services.

5. Verifying the identity of participants in online transactions, such as peer-to-peer lending, crowdfunding, and auction websites. EAS allows these transactions to be securely and transparently verified using attested claims about the participants' identity.

## Example app ideas
1. **IDVerify**: An online identity verification service that uses EAS to create and verify attested claims about a user's identity. IDVerify allows online platforms and services to easily and securely verify the identity of their users, providing a more secure and transparent online experience.

2. **MyID**: A digital identity management platform that uses EAS to enable users to create and manage their own digital identity. MyID allows users to create and store their own attested claims about their identity, and to easily share these claims with others who need to verify their identity.

3. **DocVerify**: A document verification service that uses EAS to create and verify attested claims about the authenticity of physical documents. DocVerify allows users to easily verify the authenticity of important documents, such as birth certificates and professional licenses, providing a secure and transparent way to confirm their validity.

4. **GovID**: A digital identity solution for governments that uses EAS to securely store and verify attested claims about a user's identity. GovID allows governments to provide efficient and secure services to their citizens, such as voting, taxation, and social benefits, using a decentralized and transparent platform.

5. **TrustFlow**: An online trust and reputation platform that uses EAS to create and verify attested claims about a user's identity, credentials, and history. TrustFlow allows users to build a trusted online reputation, and to easily verify the trustworthiness of other users, enabling more secure and transparent online interactions.



## Future composability
EAS allows for the creation of attested claims about a wide range of identity-related information, such as educational qualifications, employment history, and criminal records. These claims can be composed and verified in combination with other attested claims to provide a comprehensive view of a user's identity.

Another way to improve interoperability is by using common protocols and standards for representing and exchanging identity-related information and registering it on EAS. For example, the W3C Verifiable Credentials and Decentralized Identifiers (DID) standards provide a common framework for representing and exchanging digital identity information in a decentralized and interoperable way.

By using common protocols and standards and registering them on EAS, different digital identity systems can more easily communicate and exchange information with each other, improving interoperability and enabling the creation of more powerful and flexible digital identity solutions.


