---
sidebar_position: 14
---
# 💼  Job Applications

## Problem
The traditional job application process is often opaque and can be biased. Employers often rely on resumes, cover letters, and interviews to evaluate job candidates, which can be subjective and may not provide a complete picture of a candidate's skills and qualifications. This can make it difficult for job seekers to differentiate themselves and can lead to unfair hiring decisions.

## Solution
Ethereum Attestation Service (EAS) provides a decentralized solution for securely storing and verifying claims about a job candidate's qualifications and skills. With EAS, job seekers can create attested claims about their education, work experience, and other qualifications, which can then be verified by employers and other trusted entities. This provides a secure and transparent way to evaluate job candidates, and can help to prevent bias and unfair hiring decisions.

## Example
Alice is a job seeker who is looking for a new job in software development. She has a degree in computer science and several years of work experience at tech companies. She uses Ethereum Attestation Service (EAS) (or a front-end UI powered by EAS) to create an attestation with a schema that defines the data fields and types relevant to her job application, such as her education, work experience, and technical skills.

Alice uses the attestation service to create an attestation with this schema and provides the necessary data, such as her degree, work experience, and technical skills. The attestation is cryptographically signed and stored on the Ethereum blockchain, providing a secure and verifiable record of Alice's qualifications and skills.

When Alice applies for a job at a software development company, she includes her attestation in her job application. The company uses the attestation service to verify the attestation and access the data contained in it. This helps the company to quickly and accurately evaluate Alice's qualifications and skills, which they can use to decide whether to offer her an interview or a job.

## Example schema
The schema for a job application could include fields for the following data:
``` jsx
// Solidity ABI schema for job application data

{
    applicantName: string,
    applicantEmail: string,
    applicantPhone: string,
    applicantAddress: string,
    applicantResume: string,
    applicantPortfolio: string,
    applicantExperience: string,
    applicantReferences: string,
    applicantCoverLetter: string
}
```


## Example attestation
```bash
{
    applicantName: "Alice Smith",
    applicantEmail: "alice.smith@gmail.com",
    applicantPhone: "+1 555-555-5555",
    applicantAddress: "1234 Main St, Anytown USA 12345",
    applicantResume: "https://www.dropbox.com/s/abcdefghijklmnop/alice_smith_resume.pdf?dl=0",
    applicantPortfolio: "https://www.alicesmithdesign.com/",
    applicantExperience: "5 years of experience in graphic design and branding",
    applicantReferences: "https://www.linkedin.com/in/alice-smith-design/",
    applicantCoverLetter: "Dear hiring manager, I am excited to apply for the graphic designer position at your company. I have attached my resume and portfolio for your review. Please let me know if you have any questions. Thank you for considering me for this opportunity. Sincerely, Alice Smith"
}
```
## Example business ideas
1. **VeriHire** - a platform that allows job seekers to easily create and share verified attested claims about their skills, experience, and education. Employers can quickly and easily verify these claims to make more informed hiring decisions.

2. **CredentialsPro** - a service that helps job seekers showcase their professional credentials and certifications in a secure and verifiable way. Employers can easily verify the authenticity of these credentials and make more informed hiring decisions.

3. **ResumeBoost** - a platform that helps job seekers create a more compelling and verifiable resume by using attested claims to highlight their skills and experience. Employers can easily verify these claims to make more informed hiring decisions.

4. **AttestedReferences** - a service that enables job seekers to provide attested references from previous employers and colleagues, making it easier for employers to verify the credibility of these references and make more informed hiring decisions.

5. **EASyJobs** - a job search platform that uses EAS to help job seekers create and share verified attested claims about their skills, experience, and education. Employers can easily verify these claims to make more informed hiring decisions.

## Future composability
The ability to compose and integrate the job application schema with other schemas and protocols is one of the key strengths of EAS. This enables the schema to evolve and adapt to changing needs and requirements, and allows it to be used in new and innovative ways.

For example, the job application schema could be integrated with other identity verification schemas to provide a more robust and comprehensive way to verify a job seeker's identity and qualifications. This could involve adding fields to the schema for verifying a job seeker's education and work experience, as well as their personal and professional references.

Additionally, the job application schema could be integrated with smart contract systems and decentralized storage solutions, such as IPFS, to enable more automated and transparent verification of a job seeker's qualifications and experience. For example, a smart contract could be used to automatically verify a job seeker's attested claims and determine their eligibility for job opportunities based on certain criteria, such as their education, skills, and experience.

