---
sidebar_position: 4
---

# FAQs
Explore frequently asked questions about EAS.

## About EAS
<details>
<summary>What is EAS?</summary>
EAS (Ethereum Attestation Service) is an infrastructure tool for making attestations onchain or offchain. As a public good, EAS is completely open-source, permissionless, tokenless, and free to use. It's a new primitive for building more trustful interactions online.
</details>

<details>
<summary>How does EAS work?</summary>
EAS is elegantly simple. It runs on two smart contracts. One to register a schema (which is the data topic of the attestation) and another for making attestations with that schema. This allows you to make a digital signature on structured data.  Just from these two primitives you can unlock so many use cases that seemed out of reach before.
</details>

<details>
<summary>Does EAS also work offchain?</summary>
Absolutely. EAS supports both onchain and offchain attestations, providing flexibility based on the specific needs and use cases. You can learn more about when to use onchain versus offchain attestations in the docs.
</details>

<details>
<summary>What's the difference between onchain and offchain?</summary>
With EAS, you can make attestations onchain or offchain. Onchain requires gas to make the attestation. Offchain requires zero gas. Both options have the authenticity of the digital signature and are immutable. We have a dedicated page to understand the differences in our Core Concepts section.
</details>


<details>
<summary>Where is EAS deployed?</summary>
EAS is deploying where builders are building. You can find EAS deployed on the Ethereum mainnet but also on various Layer 2 solutions and testnets.
</details>

<details>
<summary>Is EAS EVM compatible?</summary>
Yes. EAS can be deployed on any chain that is EVM-based.
</details>

<details>
<summary>What can you build with EAS?</summary>
Anywhere you need more trust in who or what you're interacting with online, attestations can play a role. EAS is versatile. Whether you're looking to verify content, establish reputation systems, build voting systems, or create decentralized identity solutions, and beyond... EAS has got you covered. Our documentation offers a ton of inspiration.

</details>

<details>
<summary>What are the costs associated with using EAS?</summary>
EAS is a free service. However, when making onchain attestations, users will incur gas fees, which vary based on network activity, attestation complexity, and the specific chain used. Offchain attestations, on the other hand, are completely gas-free.

</details>

<details>
<summary>How does EAS make money?</summary>
EAS operates as a public good and doesn't generate revenue from its core services. Its funding sources include donations, grants, and retroactive public goods funding.
</details>

<details>
<summary>Does EAS have a token?</summary>
No. EAS is a tokenless protocol and does not have plans to launch a token. Being a tokenless protocol is critical to our design as to remain credibly neutral. This ensures that no one particular group has a financial advantage over another group. 
</details>

<details>
<summary>Have the EAS contracts been audited?</summary>
Yes. To ensure the utmost security and reliability, EAS contracts have undergone a thorough audit by Spearbit, a reputable third-party firm.
</details>

## Understanding Attestations
<details>
<summary>What exactly is an attestation?</summary>
An attestation is simply a digital signature on some structured data. It allows any entity to say something about anything in an authentic and immutable way. Seems abstract right? Well attestations happen all the time offline. Any time an entity wants or needs to make a verified statement about something, attestations play a role. We just haven't had a way to do this online or onchain. 
</details>

<details>
<summary>What gives an attestation value?</summary>
The value of an attestation comes from the relative reputation of the entity making the claim. It's who makes the attestation that gives it value. The immutability and authenticity of a digital signature is what makes them more secure and verifiable. 

</details>

<details>
<summary>Do attestations always need a recipient?</summary>
Not always. For instance, a social media post is essentially an attestation of a statement made by an individual. Recipients are necessary only when the attestation pertains to a specific entity or address.
</details>

<details>
<summary>Can you edit an attestation after it's been made?</summary>
No. Attestations are immutable to maintain their trustworthiness. If modifications are needed, the issuer would typically revoke the original attestation and create a new one.
</details>

<details>
<summary>How do you keep attestations private?</summary>
EAS offers the flexibility of public and private attestations. Depending on the use case, data can be encrypted, kept off-chain, or selectively disclosed using "Private Data Attestations" and Merkle trees.
</details>

<details>
<summary>What happens if someone makes a ton of false attestations?</summary>
False attestations can be challenged or disregarded. The value of an attestation is rooted in the issuer's reputation. Numerous false attestations from a non-credible source would be ignored.
</details>

<details>
<summary>What's the difference between a 'credential' and an 'attestation'?</summary>
A credential is just an attestation from one entity attesting to certain attributes or events about someone else or something. Attestations are more generalized and can be much more than a credential, whereas credentials are not good for all use cases that attestations can solve for. 
</details>

<details>
<summary>Are attestations tokens or NFTs?</summary>
No, attestations differ from tokens or NFTs. They are digital signatures on structured data, signifying a claim or verification. 
</details>

<details>
<summary>Can attestations be revoked?</summary>
Yes. EAS allows the issuer of the attestation to revoke the onchain or offchain attestation. This changes the state of the attestation to "revoked". It does not delete the attestation. The schema can also define if attestations made with that schema are revocable. This allows builders to also create an irrevocable attestation. 
</details>

<details>
<summary>Can attestations be transferable?</summary>
Attestations themselves aren't transferable. However, using the concept of revocation and referenced attestations, a chain of ownership (provenance) and its current state can be established, similar to property title changes.
</details>

<details>
<summary>Why should I use attestations instead of a SBT or NFT?</summary>
While SBTs and NFTs symbolize assets or unique entities, attestations signify claims or verifications. The choice hinges on the need: attestations for trust and verification, and SBTs or NFTs for representing assets. Moreover, SBTs & NFTs lack standardization as every token is its own smart contract address with arbitrary data and structure, posing challenges for interoperability and composability.
</details>

<details>
<summary>Can I batch attestations & revocations?</summary>
Certainly! EAS supports batch attestations and revocations. For a detailed guide, refer to our documentation.
</details>

<details>
<summary>Can someone else pay for the transaction fee for an attestation?</summary>
Yes, through "delegated attestations", you can specify who covers the gas fee, allowing one entity to sign an attestation while another bears the transaction cost.
</details>


## Technical Aspects
<details>
<summary>What is a resolver contract?</summary>
A Resolver Contract is a smart contract linked to a Schema. It ensures that attestations adhere to specific rules or logic before finalization. This feature introduces additional functionalities to schemas, such as user allowlists or conditional NFT minting and much more. Any smart contract logic.
</details>

<details>
<summary>What data is included in each attestation?</summary>
Each attestation has the following struct:
<ul>
<li>uid: The unique identifier of the attestation. </li>
<li>schema: The schema identifier associated with the attestation.</li>
<li>refUID: The reference UID of the attestation, if any.</li>
<li>time: The Unix timestamp when the attestation was created.</li>
<li>expirationTime: The Unix timestamp when the attestation expires (0 for no expiration).</li>
<li>revocationTime: The Unix timestamp when the attestation was revoked, if applicable.</li>
<li>recipient: The Ethereum address of the recipient of the attestation.</li>
<li>attester: The Ethereum address of the attester who created the attestation.</li>
<li>revocable: A boolean indicating whether the attestation is revocable or not.</li>
<li>data: The attestation data in bytes format.</li>
</ul>
</details>

<details>
<summary>How do we coordinate around the right schemas?</summary>
EAS does not presuppose the right schemas for a use case. It's up to the community to coordinate and decide which schemas to use for a particular use case. To help foster this discussion, we have created a dedicated EAS forum at https://forum.attest.sh.
</details>


<details>
<summary>Is EAS compatible with zero-knowledge proofs?</summary>
Yes, EAS can be used with zero-knowledge proofs to prove attestations without revealing the underlying data, enhancing privacy.
</details>

<details>
<summary>Where can I store my offchain attestations?</summary>
Off-chain attestations can reside in private databases, decentralized storage systems, or any secure storage medium. The EAS Explorer offers a way for making offchain attestations public, pinning, and indexing the data. Integration with Ceramic and other storage networks is also underway.
</details>

<details>
<summary>How composable is EAS?</summary>
EAS is extremely composable, thanks to the refUID feature, which facilitates the creation of a web of referenced attestations. This provides richer context to attestations. Additionally, the shared use of similar schemas enhances EAS's composability.
</details>

## Community & Support
<details>
<summary>I'm not a developer. How can I benefit from EAS?</summary>
Even if you're not technically inclined, grasping the concept of attestations and their role in enhancing digital trust can be advantageous. As EAS evolves, expect more intuitive applications built on it. Plus, we've crafted no-code tools for non-developers to design schemas and create attestations. All you need is a digital wallet!
</details>

<details>
<summary>What's the best way to get involved?</summary>
Engage with our community channels, contribute to our open-source initiatives, partake in discussions, or simply advocate for EAS.
</details>

<details>
<summary>Where can I find support or ask questions about EAS?</summary>
Our dedicated forum and community channels are your go-to places for any questions, technical assistance, or discussions about EAS.
</details>
