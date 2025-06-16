---
sidebar_position: 10
---
# Contribute
*The playbook is just phase 1. What we still need and how you can help build it.*

The zk + attestation stack is real. You can ship private, provable, composable facts using tools like EAS and zkVMs. But here’s the honest truth: it’s still way too hard for most builders.

If you felt the friction in this playbook, good. That’s the opportunity. We’re inviting you to help us fix it.

![Wish List](./img/ideaboard.png)


-----
## The Wishlist: What Needs to Exist
Here’s the concrete tooling we want to see—some of which we’re already prototyping, and all of which you can help build:

### Generalized ZK Attestation Prover
Imagine this: you land on easscan.org, pick any attestation (onchain or offchain) and with one click, generate a ZK proof about it using any condition you define.

No custom hand written circuits. No dev setup. Just:
1.  Generate ZK proof from this attestation →
2.  Choose condition (e.g., X > Y, Z == N, etc) →
3.  Proof created, ready to verify onchain or offchain.

This is the best devex: make proofs from any attestation, from any schema, without writing custom circuits every time for any purpose.

Devs need:
- A modular, reusable ZK circuit or zkVM program that can parse and evaluate arbitrary EAS attestations (SP1 is promising)
- A condition builder UI for non-devs.
- An open-source React component for the "Generate Proof" button.
- Verifier contracts that plug in to existing apps or frontends.

### SDKs & Storage for Offchain Attestations
Most proofs will be generated from offchain attestations. But devs are stuck managing storage and signatures themselves. We need:
- Easy ready-to-go options for devs to store/fetch offchain attestations.
- Pluggable backends (e.g. IPFS, DB, S3, etc) with common interfaces.
- UX patterns that integrate with wallets or apps (e.g. save your attestation in your browser vault).

### Templates & Forkable Repos
We need a suite of starter kits:
- “ZK-Prove From EAS” repo templates using Circom, Noir, and zkVMs like the SP1 ZKAttestify toolkit.
- Examples for onchain verification (Solidity contracts with Verifier + Resolver).
- End-to-end flows (attest → prove → verify) for common use cases.

### zkResolvers & Contract Factories
Right now, verifying a proof onchain can mean deploying your own verifier contract. That’s a huge hurdle.

Devs need:
- A registry of reusable verifier contracts (Groth16, Plonk, SP1, Risc0, etc).
- A contract factory where you can define your verification logic and deploy it with one click.

### React Libraries for Wallets & UX
For attestations and proofs to become a common pattern, we need:
- React components that are reusable for making attestations + proofs
- Proof uploaders and visual verifiers for end users people can clone
- Wallet integrations (MetaMask Snap, RainbowKit plugin) that support ZK attestations as a native asset type.

### Community, Docs, and Content
We’re only as strong as the people who understand and teach this stuff.
- Make tutorials.
- Host workshops.
- Record videos of you building with zk + attestations.
- Add your voice to this ecosystem.

If you want to learn in public, this is a great place to start.

-----
## Our Roadmap
Over the rest of this year, we’re heads-down focused on:
- Collaborating with devs building real zk attestation use cases.
- Partnering with teams to ship proof-friendly attestations into live apps.
- Contributing open-source tools (including the ZKAttestify toolkit).
- Supporting builders who want to push this stack forward—whether it’s a wallet, a proving service, or a new standard, example apps.

If you’re working on anything in this space, we want to hear from you.
We’re especially interested in projects who want to test, prove, and abstract ZK + attestations into something any app can use without needing a cryptography PhD.

----
We're building the future of how trustful interactions happen online and onchain. Join us on the journey, let's build.

Join us on GitHub, drop into the EAS community, or fork the toolkit and give feedback.

See you out there.