---
sidebar_position: 6
---

# Healthcare Services 

## Problem
Traditionally, healthcare information has been stored and managed by centralized systems, such as electronic medical records (EMR) systems. These systems can be slow, expensive, and vulnerable to data breaches and privacy violations. Additionally, patients often have limited control over their own healthcare data, and may have difficulty accessing and sharing their information with healthcare providers.

## Solution
EAS provides a decentralized solution for securely creating, storing, and verifying attestations of healthcare records and information. With EAS, healthcare providers, such as doctors and hospitals, can create attestations about a patient's health information, such as their medical history, allergies, and medications. These attestations are cryptographically signed and added to the Ethereum blockchain, where they can be easily accessed and verified by authorized parties.

This provides a transparent and verifiable record of a patient's health information, enabling more efficient and effective healthcare services. For example, a doctor can easily access and verify a patient's medical history and medications, reducing the risk of errors and adverse reactions. Additionally, patients can have more control over their own health information, and can choose to share it with authorized parties, such as other doctors or insurance companies.

## Example
Alice is a patient who wants to securely store and manage her healthcare records using EAS. She visits her doctor, who creates attestations about her health information, such as her medical history, allergies, and medications. These attestations are then added to the Ethereum blockchain, where they can be easily accessed and verified by authorized parties.

Alice can then use her digital health record to securely and transparently share her health information with other healthcare providers, such as hospitals and specialists. For example, she can use her digital health record to quickly and easily provide her medical history and medications to an emergency room doctor, enabling them to provide more effective and timely care.

Additionally, Alice's digital health record can be easily verified by authorized parties using EAS. For example, her insurance company can use EAS to verify the authenticity and accuracy of her attestations, enabling them to make more informed decisions about her coverage and benefits. This can help to improve the efficiency and effectiveness of healthcare services, and can also give patients more control over their own health information.

## Example schema

``` bash
string medicalHistory;
string allergies;
string medications;
string procedures;
string conditions;

```

## Example attestation

```bash 
medicalHistory: "Broken arm at age 8, appendectomy at age 12, flu vaccination in 2020"
allergies: "Penicillin, bee stings"
medications: "Ibuprofen, amoxicillin"
procedures: "Colonoscopy in 2019"
conditions: "High cholesterol, prediabetes"

```

## Example business ideas
1. **HealthCheckr**: A platform that connects patients with healthcare providers, using EAS to verify insurance coverage and medical history.
2. **MedToken**: A secure, decentralized healthcare wallet that uses EAS to store and verify medical records, insurance information, and eligibility for services.
3. **DoctorVerify**: A service that uses EAS to verify the credentials and qualifications of healthcare providers, helping patients to make informed decisions about their care.
4. **ClaimChain**: A blockchain-based platform that uses EAS to securely store and verify healthcare claims and payments, reducing the risk of fraud and improving the efficiency of the healthcare system.

## Future composability

EAS allows for the creation of attestations about a wide range of healthcare-related information, such as medical conditions, treatments, and prescriptions. These attestations can be composed and verified in combination with other attestations to provide a comprehensive view of a user's healthcare information.

The use of EAS for healthcare record management can provide several benefits. It can help to ensure the accuracy and completeness of a patient's medical record, making it easier for healthcare providers to provide the appropriate care. It can also provide a secure and verifiable record of a patient's medical information, which can be accessed by authorized healthcare providers. This can help to prevent errors and improve the quality of healthcare services.

In the future, EAS could also be integrated with other decentralized healthcare solutions, such as blockchain-based electronic health records and telemedicine platforms, to provide a more interoperable and transparent solution for verified user access to healthcare services. This would enable healthcare providers to more easily and securely access and verify a user's personal and medical information, enabling more efficient and effective healthcare delivery.