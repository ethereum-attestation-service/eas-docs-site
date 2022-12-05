---
sidebar_position: 14
---
# 💼  Job Applications

## Problem
The traditional job application process is often opaque and can be biased. Employers often rely on resumes, cover letters, and interviews to evaluate job candidates, which can be subjective and may not provide a complete picture of a candidate's skills and qualifications. This can make it difficult for job seekers to differentiate themselves and can lead to unfair hiring decisions.

## Solution
With EAS, job seekers can create attestations about their education, work experience, and other qualifications, which can then be verified by employers and other trusted entities. This provides a secure and transparent way to evaluate job candidates, and can help to prevent bias and unfair hiring decisions.

## Example
Alice is a job seeker who wants to use EAS to verify her qualifications and skills when applying for jobs. She receives attestations about her qualifications and skills from verified parties, such as her previous employer and the school she attended. These attestations are then cryptographically signed and added to the blockchain, where they can be easily verified by potential employers.

Alice can then use her digital identity to securely and transparently share her qualifications and skills with potential employers. For example, she can include her digital identity with the attestations in her job application. This can help to improve the trust and credibility of Alice's job application, and can also provide potential employers with a more comprehensive view of her qualifications and skills.

Additionally, the use of EAS in job applications can enable new and innovative use cases, such as verified job postings, skills matching, and candidate ranking. For example, employers who have verified their job postings using EAS could have a verified badge on their postings, indicating that the information in the posting has been attested and verified on the Ethereum blockchain. This could help to improve the quality and trustworthiness of job postings, and could also enable new features and services that require verified job information.

## Example schema
``` jsx
string name;
string position;
bytes32 startDate;
bytes32 endDate;
string education;
bytes32[] skills;
```


## Example attestation
```bash
name: "Alice Smith"
position: "Software Engineer"
startDate: "01/01/2018"
endDate: "01/01/2020"
education: "Bachelor's in Computer Science, University of California, Berkeley"
skills: ["Java", "Python", "C++"]

```
## Example business ideas
1. **VeriHire** - a platform that allows job seekers to easily create and share attestations about their skills, experience, and education. Employers can quickly and easily verify these attestations to make more informed hiring decisions.

2. **CredentialsPro** - a service that helps job seekers showcase their professional credentials and certifications in a secure and verifiable way. Employers can easily verify the authenticity of these credentials and make more informed hiring decisions.

3. **ResumeBoost** - a platform that helps job seekers create a more compelling and verifiable resume by using attestations to highlight their skills and experience. Employers can easily verify these attestations to make more informed hiring decisions.

4. **AttestedReferences** - a service that enables job seekers to provide attested references from previous employers and colleagues, making it easier for employers to verify the credibility of these references and make more informed hiring decisions.

5. **CareerVerify** - A tool that uses EAS to verify the skills and experience of job seekers, helping employers to identify the most qualified and capable candidates for their open positions.

## Future composability
The ability to compose and integrate the job application schema with other schemas and protocols is one of the key strengths of EAS. This enables the schema to evolve and adapt to changing needs and requirements, and allows it to be used in new and innovative ways.

For example, the job application schema could be integrated with other identity verification schemas to provide a more robust and comprehensive way to verify a job seeker's identity and qualifications. This could involve adding fields to the schema for verifying a job seeker's education and work experience, as well as their personal and professional references.

