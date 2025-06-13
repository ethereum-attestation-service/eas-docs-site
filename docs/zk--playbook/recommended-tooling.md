---
sidebar_position: 7
---

# Recommended Tools
*A current state view of what to pick, why, and when*. 

Below is a curated "builder‑first" toolbox for anyone combining zero‑knowledge proofs (ZK) with Ethereum‑native attestations. The list is deliberately opinionated. This is not meant to be a comprehensive registry, it's a curated list of tooling, resources, and researchers you should follow. Want to get added? Create a PR and make your case.



## 1. Picking Your Attestation Type
First decide what kind of signed data you’ll consume or create.

| Option | Why use it | Quick stats |
| --- | --- | --- |
| **Ethereum Attestation Service (EAS)** | General-purpose on/offchain attestations, GraphQL indexer, EASSCAN explorer. | 7.7 M+ attestations on 15+ networks; 279 ★ core repo. |
| **zkTLS (TLSNotary / Reclaim)** | Prove “I fetched (HTTPS payload)” without trusting the server—great for offchain evidence. | Production demos live; used in Reclaim dashboard & TLSNotary beta. |
| **W3C Verifiable Credentials** | Wallet-portable creds with JSON-LD–based schemas; bridges to EAS via wrapper contracts. | Most common in Web2, challenging for blockchain native apps. |
| *Unstructured JSON* | **Avoid.** Hard to index, verify, or interoperate. Use EAS if others will rely on your signed data.|  |

> **Tip:** Use EAS if your app or builders are going to be interacting with smart contracts. You can also consider generating an attestation from a zkTLS proof and having a verifer contract attest to the result onchain.

---

## 2. Encrypt & Scale Your Payloads (Optional)
ZK inputs often hold secrets and get large fast. Use these layers:

| Need | Start here | Details |
| --- | --- | --- |
| Encrypt sensitive fields before publishing. | **Lit Protocol** | Threshold ECDSA, programmable access-control, WASM signer. |
| Cheap, high-bandwidth blobs for witnesses. | **EigenDA** (EigenLayer AVS) | 15 MB/s throughput; \$1.6 B restaked security (May 2025). |

---

## 3. Fork a Starter Template (Generate & Verify Fast)

| Template | What you get | Link |
| --- | --- | --- |
| **Foundry × Risc Zero** | Prove Rust logic and verify in Solidity with Forge tests, out-of-the-box. | <https://github.com/risc0/risc0-foundry-template> |
| **Hardhat-circom plugin** | Compile Circom circuits, auto-generate Solidity verifiers, test in Hardhat. | <https://www.npmjs.com/package/hardhat-circom> |
| **Noir Starter Kit** | Write proofs in Noir, verify on- or off-chain with Hardhat/Foundry. | <https://github.com/noir-lang/noir-starter> |
| **SP1 CLI + Verifier WASM** | End-to-end pipeline: prove off-chain attestations, verify via WASM or Solidity. | <https://github.com/succinctlabs/sp1> |
| **zkAttestify** | CLI + Rust template turning any EAS off-chain attestation into a proof (SP1 or Risc Zero). | <https://github.com/Shivannsh/ZKAttestify-Sp1-verifier> |

---

## 4. Choose a zkVM or DSL for Your Logic
*(zkVM = compile real code fast · DSL = custom language)*

| Tool (type) | Edge | Notes | Link |
| --- | --- | --- | --- |
| **SP1 zkVM** (zkVM) | LLVM compile-target; Rust-first workflow. | STARK-based; 10 – 28× faster on sample workloads. | <https://succinct.xyz/docs/sp1> |
| **Risc Zero zkVM** (zkVM) | Full RISC-V VM, Rust/C support. | SNARK/STARK backends; used in Zeth zkEVM. | <https://dev.risczero.com> |
| **Circom 2 + SnarkJS** (DSL) | Widest-used DSL; huge gadget library. | Groth16, PLONK, recursion in v2.2. | <https://docs.circom.io> |
| **Noir** (DSL) | Rust-like syntax compiling to ACIR. | Backend-agnostic with recursive proofs. | <https://noir-lang.org> |
| **Halo2 / Arkworks** (DSL) | Rust crates for PLONK-ish SNARKs. | Powers Scroll, Taiko, PSE projects. | <https://github.com/zcash/halo2>, <https://github.com/arkworks-rs> |
| **Jolt** (zkVM) | Lookup-optimised RISC-V SNARK VM. | Early benches show faster proving per step. | <https://github.com/a16z/jolt> |
| **zkSync Boojum / Airbender** (zkVM) | STARK prover inside zkSync Era. | Boojum 2.0 ≈ 10× faster (Q1 2025). | <https://github.com/matter-labs/era-boojum> |

---


## 5. Stay Up to Date — ZK Research Orgs

| Resource | Description | Link |
| --- | --- | --- |
| **Privacy & Scaling Explorations (PSE)** | EF research & dev lab building widely-used tools like Semaphore, RLN, Circom 2 and publishing practical ZK research. | <https://pse.dev> |
| **0xPARC Foundation** | Non-profit research hub funding/mentoring open-source programmable-crypto projects, running ZK bootcamps and grant programs. | <https://0xparc.org> |
| **StarkWare Research** | Company R&D team that invented STARKs; shares Cairo language updates and performance benchmarks for Starknet/StarkEx. | <https://starkware.co/blog> |
| **Polygon Zero (Plonky2/3)** | L2 research team behind Plonky2/3 recursive SNARK libraries powering Polygon zkEVM; frequent prover-speed posts. | <https://polygon.technology/blog/introducing-plonky2> |
| **Scroll Research** | zkEVM R&D blog with deep dives on zkEVM architecture. | <https://scroll.io/blog> |
| **Aztec Labs** | Privacy-rollup research group publishing Turbo-PLONK papers and privacy-first protocol research; pioneers PLONK deployments. | <https://aztec.network/research> |
| **Espresso Systems** | Independent ZK R&D team developing Jolt zkVM and Lasso look-up arguments; explores cross-chain privacy sequencing. | <https://espressosys.com> |
| **Applied ZKP Workshop** | Educational program providing hands-on course that guides devs from Circom circuits to live zkDApps on Ethereum. | <https://github.com/Poseidon-ZKP/Applied-ZKP-Workshop> |

---

## 6. ZK People to Follow
| Name | Why follow | X |
| --- | --- | --- |
| **Uma Roy** (Succinct) | Cofounder posting the latest about zk. | <https://x.com/pumatheuma> |
| **Jeremy Bruestle** (Risc Zero) | Cofounder of Risc0. | <https://x.com/BruestleJeremy> |
| **Alex Gluchowski** (zkSync) | Invetor of zksync. | <https://x.com/gluk64> |
| **Zac Williamson** (Aztec) | Privacy rollup design notes. | <https://x.com/Zac_Aztec> |
| **Eli Ben-Sasson** (StarkWare) | STARK theory threads. | <https://x.com/EliBenSasson> |
| **Jordi Baylina** (Polygon zkEVM) | Building polygon's zkevm. | <https://x.com/jbaylina> |
| **Ben Fisch** (Espresso) | New zkVM primitives. | <https://x.com/benafisch> |
| **Yi Sun** (Axiom) | All things axiom. | <https://x.com/theyisun> |
| **Anna Rose** (Zero Knowledge Podcast) | Weekly dev interviews. | <https://x.com/AnnaRRose> |
| **Vitalik Buterin** | No reason necessary. | <https://x.com/VitalikButerin> |
| **Subhash Karri** (Reclaim) | zkTLS trends and use cases. | <https://x.com/subhash_karri> |
| **Andy Guzman** (PSE) | Great public goods leader and zk innovator. | <https://x.com/AndyGuzmanEth> |
| **Arun Sajeev** (Holonym) | ZK identity trends. | <https://x.com/arunsajeev17> |
| **Sinu _eth** (TLSNotary) | All things zkTLS and TLSNotary. | <https://x.com/sinu_eth> |
| **Lasha Antadze** (Rarimo) | Real world adoption of zk identity. | <https://x.com/LashaAntadze> |



---

















