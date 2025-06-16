---
sidebar_position: 2
---

# Quickstart (15min)

> Special thanks to the [**ZK Attestify**](https://github.com/Shivannsh/ZKAttestify-Sp1-verifier) team.

Let's go from zero to a **working ZK attestation** in 15 minutes. You'll build a privacy-preserving flow that proves a user's age is over 18 using:
- An offchain EAS attestation
- A zero-knowledge proof using Succicnts SP1
- In-browser verification (WASM)
- And optionally, onchain verification via EAS + Solidity

> *ZK Attestify Video Demo:*
> <iframe src="https://drive.google.com/file/d/17Ytg7iomjCYivI3lktPrU3ODakBanPg3/preview" width="640" height="480" allow="autoplay"></iframe>

---

## The Use Case

> **Prove someone is over 18 without revealing their full birthdate.**

- Is this use case overused? Yes.  
- Is it the simplest flow to grok? Also yes.  
- Is this use case actually useFUL? Not really.

You can swap in your own schema later. This flow is fully **modular**. With a few tweaks, this same stack works for:
- Proof of residence  
- Degree verification  
- Employment credentials  
- Any signed fact you want to keep private

> *Example GitHub repo* [ZK Attestify Toolkit](https://github.com/Shivannsh/ZKAttestify-Sp1-verifier)



---

## Prerequisites

### Make sure you have the following installed:

- Rust & Cargo (via rustup.rs)
- wasm-pack (cargo install wasm-pack)
- Node.js & pnpm (Node ≥ 14; npm install -g pnpm)
- SP1 CLI (curl -L https://sp1up.succinct.xyz | bash)
- A fresh EAS attestation JSON (e.g. downloaded from easscan)
- Git (to clone the toolkit)

### Repo Setup
```bash
git clone https://github.com/Shivannsh/ZKAttestify-Sp1-verifier.git
cd ZKAttestify-Sp1-verifier
```

## Step By Step Guide
You'll run these 3 core steps:

1. Compile the verifier (WASM)
2. Generate ZK proofs (Groth16 + Plonk)
3. Verify the proof (locally in JS or onchain via Solidity)

Each component is modular—you can use them together or independently in your own flow.

### 1. 🧱 Build the WASM Verifier
This compiles a Rust-based Groth16/Plonk verifier into a JS-callable module.

```bash
cd verifier
wasm-pack build --target nodejs --dev
```
**Output:** `pkg/sp1_WASM_verifier.js` + related WASM bindings

### 2. 🧮 Generate Your Proofs
Run the age-checking program in SP1 to produce two ZK proofs.

```bash
cd example/dob-script
cargo run --release -- --mode groth16 --prove
cargo run --release -- --mode plonk --prove
```
**Output:** `DOB-Attestaion_groth16_proof.json` and `…_plonk_proof.json`

3. In-Browser Verification (WASM)
Use the included script to verify your JSON proof inside Node.js (browser-compatible).

```bash
cd example/WASM_verifier
pnpm install
pnpm run test
```
**Output:** Console logs showing proof validity and decoded public inputs.

### 4. Optional: Onchain Attestation
This submits your proof to the Groth16_Verifier contract, which verifies the proof and writes an onchain attestation.

1. Set up your .env:
```bash
RPC_URL=https://sepolia.base.org
PRIVATE_KEY=your_private_key
CONTRACT_ADDRESS=The contract address
```
2. Run the script:

bash
Copy
Edit
cd example/solidity-verifier
cargo run --release
Output: Transaction receipt confirming your proof was verified and attested onchain.


## How This Works (Under the Hood)
Key components of the toolkit:

| Component            | What It Does                                                         |
| -------------------- | -------------------------------------------------------------------- |
| `verifier/`          | Compiles Groth16/Plonk verifiers to WASM                             |
| `dob-program/`       | SP1 program that verifies EAS signature + checks if age ≥ 18         |
| `dob-script/`        | CLI that feeds inputs, runs proof generation, serializes to JSON     |
| `solidity-verifier/` | Onchain contract that accepts the proof and triggers EAS attestation |
| `WASM_verifier/`     | JS example for local/browser-side proof verification                 |


All files and paths are available in the [ZKAttestify GitHub](https://github.com/Shivannsh/ZKAttestify-Sp1-verifier) repo.


## Signature Verification (EIP-712)
The toolkit uses EIP-712 to verify the signature on each offchain attestation. The SP1 program ensures:
- The signer matches the attester
- The attestation hasn't been tampered with
- Domain-specific separation is preserved

This is what makes your ZK proof verifiably tied to a real EAS attestation.

## Known Limitations
- Local proof generation is slow (10–20 min)
- Only Groth16 and Plonk are supported today
- Circuit logic must be hand-tuned for each use case

You can improve performance by using Succinct's prover network or pre-generating common proofs.

```note
Using the Succicnt prover is faster, but you trade off some security/privacy as you have to provide the inputs to their network. 
```

## Want to Customize?
Here's what to tweak:
- In `dob-program/src/main.rs` – change the logic (e.g., `degree == "CS"`)
- In `dob-script/input.json` – change attestation data and schema
- In `WASM_verifier/` – verify any proof with the same structure

## Learn More or Contribute
This project is a reference implementation—modular, open source, and ready to fork. Help us extend support for more schemas, verifiers, and use cases.
- Open a PR or issue on GitHub 
- Ask for schema help on the EAS telegram

## Summary
You now have:
- An EAS attestation you can prove things about
- A ZK program that verifies the signature and logic
- A working proof, verified in JS—and optionally onchain

### **Next up:** 
Let's clear up the biggest myths and misconceptions that stop builders from using ZK and attestations together.