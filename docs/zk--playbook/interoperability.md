---
sidebar_position: 8
---

# Interoperability
*Quick guidance on how to make your zk attestations interoperable with different formats.*



## Different Attestation Formats
*Choosing the right credential format & making it travel across chains.*

| Format                                            | Best When…                                                                                                  | Watch-outs                                                                                              |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Onchain EAS attestation**                      | Contracts must **read it trustlessly** (e.g. gating, rewards, programmability).                                | Public data.  Needs bridging (or proof) to reach other chains.                                          |
| **Offchain EAS attestation** (`EIP-712` payload) | Same schema & signing model as onchain, **zero gas**, wallet-signable.  Great for ZK inputs.               | Verifier must fetch + check sig.  Still `secp256k1` (heavy inside SNARK).                               |
| **W3C Verifiable Credential (VC)**                | **Web2 Focused**.  Wallet UX, JSON-LD schemas, selective-disclosure BBS+/CL proofs. | Onchain contracts can’t parse it directly—need wrapper proof or mirror.                                |
| **JWT**                                           | You already have Web2 infra (OAuth, APIs) and just need a short-lived token.                                | No schema semantics; no built-in selective disclosure.  Can be re-issued into EAS for onchain use. |

## How to Make Them Play Together
| **Need**                                   | **What to do with EAS**                                                                                                                                       | **Helpful for**                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Ingest a Web2 JWT                          | Verify JWT offchain → issue **offchain EAS** attestation with same issuer key; optionally anchor the UID onchain                                           | KYC / OAuth credentials reused for airdrops or gated apps                  |
| Prove a VC claim onchain, privately       | Holder makes selective-disclosure proof → contract verifies proof and mints an **onchain EAS** “passed” attestation                                                | Age-gated pools, anonymous member drops                                     |
| Let wallets carry EAS creds                | Wrap the EAS payload as a **VC** (issuer = `did:pkh`) so any DID wallet can import and present                                                                | Seamless cross-app identity, offchain sign-in                              |
| Use an EAS attestation inside a ZK circuit | Feed attestation + pubkey to a zkVM (Risc0, SP1) that checks the signature and emits a small SNARK → downstream circuits verify that                          | Gas-light reputation math, batched scoring proofs                           |
| Consume EAS on another chain               | **OP Superchain:** Cross-L2 Inbox relays the attestation log. **Any L1/L2:** use Axiom / Telepathy to SNARK-prove the storage slot and verify on target chain | Single attestation usable across Superchain; mainnet attestations gating L2 actions |

>**Rule of thumb:** keep the source-of-truth attestation where it’s cheapest and most trusted—use proofs, wrappers, or relays when you cross a boundary.