---
sidebar_position: 6
---

# Design Patterns That Work
*Use these patterns to skip the noise.*

Here are a few design patterns that have emerged as reliable, reusable, and modular. Most of these have been proven in the wild or are one deploy away from being production-ready.

![Design Patterns](./img/designpatterns.png)

---

## 1. Merkle Membership Proofs (Anonymous Attestations)

This is one of the earliest and still most elegant ZK patterns. You have:
- A Merkle tree of members (e.g. allowlist, DAO voters, ticket holders, curated registry of addresses)
- A user with a private commitment (secret) to a leaf node
- A ZK proof that shows “I’m in the tree” without revealing which leaf the user is.

The Merkle root can be *posted onchain and signed (attested)* by whoever owns the list. Then anyone can verify leafs against the attested merkle root.

### Why use it?
- Perfect for anonymous, Sybil-resistant flows  
- Doesn’t require revealing identity or wallet  
- Attestation = inclusion in the Merkle set  
- Works great with Semaphore-style nullifiers for one-time actions

### Good for:
- Anonymous voting
- Sybil-resistant airdrops
- Proof of membership and inclusion lists without doxxing
- Private forum posts or onchain claims

---

## 2. Offchain Attestation → ZK Proof → Onchain Attestation

This is the most general purpose and flexible pattern. You start with a signed offchain credential (from an issuer you trust), generate a ZK proof from it, and then write a *new*, privacy-preserving attestation onchain so it can be verified.

### How it works:
1. **Offchain issuance**  
   Example: `{"user": "0xabc...", "bankBalance": $1m}` signed by Acme Bank
2. **ZK proof generation**  
   Prover runs a circuit that checks signature + verifies a condition (e.g. `balance ≥ $1m`)
3. **Onchain resolver**  
   Smart contract verifies the proof and posts a minimal attestation to:  
   `Attestation("balance_verified")`

### Why it matters:
- The original credential stays private  
- The proof only commits to what the verifier needs to know  
- Greater lifecycle of the proof (you can revoke the onchain attestation if the underlying conditions are no longer valid)
- You can chain these proofs to derive new attestations from prior ones

### Good for:
- KYC/age/gov ID flows without doxxing  
- Reputation systems  
- Staged verification workflows (offchain → onchain)

---

## 3. Resolver Contracts + Proof-Triggered Actions

Resolvers are a powerful way to embed logic into the attestation lifecycle.

In this pattern:
- A user submits an attestation that includes a proof (e.g. in the data field)
- The EAS resolver contract verifies the proof
- If valid, it triggers onchain logic (mint, write, etc.)

### Why it's powerful:
- Onchain actions are *gated by proofs*, not trust  
- The logic is entirely verifiable and automatic  
- Users can self-serve without backend coordination

### Example:
> You issue an offchain cert for completing an offchain challenge.  
> The user submits a ZK proof of completion via attestation.  
> The resolver verifies it and mints an NFT or sends a payment.

### Good for:
- Claim flows based on offchain proof-of-work  
- Gamified reward systems  
- Any “prove it, then mint/pay it” experience

---

## 4. Attested zkVM Execution (Proof-as-Attestation)

This pattern flips the model: instead of generating a proof from an attestation, the *program execution itself* is the attestation.

You run logic inside a zkVM (like SP1 or Risc0), prove it ran correctly, and write that fact as an attestation.

### How it works:
- zkVM runs your business logic: `is_score_above(700)`
- Generates a ZK proof that it ran that code with specific inputs
- That proof is verified onchain and results in a new EAS attestation

### Why it matters:
- Great for offchain computations you still want to anchor onchain  
- Gives you auditability without revealing source data  
- Works well for multi-input, opaque, or branching logic

### Good for:
- Credit scoring (financial creds)
- Proof-of-training (AI/ML)
- Proof-of-computation (batch jobs, risk analysis)
- Custom business rule enforcement

---

## Final Notes

| Use Case | Pattern You Want |
|----------|------------------|
| Private group membership | Merkle proofs (Pattern 1) |
| Selective KYC, age-gating | Offchain → Proof → Onchain (Pattern 2) |
| Auto-mint after private verification | Resolver callback (Pattern 3) |
| Complex workflows or batch jobs | zkVM attestation (Pattern 4) |

---

Steal what’s useful. Adapt what isn’t. And **feel free to invent Pattern #5**, we’ll feature it this playbook.