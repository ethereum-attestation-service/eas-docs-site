---
sidebar_position: 5
---

# Avoid Misconceptions
*How to work through the noise.*

ZK and attestations are new tools in the Ethereum builder's stack. And like any emerging paradigm, they come with baggage... myths, outdated assumptions, and misapplied mental models.

Let’s clear a few up.

![Myths](./img/zkpmyths.png)


---

## Myth 1: “ZK proofs are too slow to be practical.”

**Reality:** Early ZK circuits were slow and painful. Multi-minute proving times, heavyweight setups, complex libraries. But things have changed.

- Most modern circuits can generate proofs in seconds.  
- Onchain verification is usually <1 second.  
- Tools like SP1, Risc0, and Noir are narrowing the gap fast.

If you design smartly (proving only what’s necessary), ZK can absolutely be practical. Also remember, Moore’s Law and dedicated research are on our side here. The trajectory is that what’s barely feasible today becomes commonplace tomorrow. So don’t dismiss ZK as “always too slow”... evaluate it case by case. 

**Tip:** Consider the intended frequency of how often the proof needs to be generated. You may only need to generate the proof once, then you can store that proof in an onchain attestation to easily be verified by a smart contract or other entity at a later date. You may not actually need to generate the proof every single time the user uses your app. Build a joyful experience around it if you need to wait 20 minutes. For example, give them a Domino’s style pizza experience, waiting for their proof to generate. Abstract the complexity, make it fun.

---

## Myth 2: “You need a PhD in cryptography to use ZK.”

**Reality:** You don’t need to understand elliptic curve math to use HTTPS and the same is becoming true for ZK.

Today’s stack includes:
- High-level circuit languages like **Circom**, **Noir**, and **SnarkyJS**
- zkVMs like **SP1** and **Risc0** that let you prove normal code (Rust, C, etc.)
- Boilerplate repos, templates, and tutorials for most common patterns

Yes, you still need to understand *what* you're proving and *why it matters*. But you don’t need to reinvent the math.

**Tip:**
- Treat ZK tooling like any other dev library: import it, test it, and iterate.
- Respect the sharp edges, but don’t fear the stack because it feels complex.
- Build, ask questions, share circuits. Most of the community learned by doing.

---

## Myth 3: “Attestations leak private data onchain.”

**Reality:** Not if you design them right.

Attestations are just signed pieces of structured data. What you put onchain and what stays private is up to you, the builder.

You can:
- Store just a hash onchain (e.g. of an offchain credential)
- Use ZK to prove something about that data (e.g. “age ≥ 18”)  
- Reveal **only** what you need, when you need it

Think of attestations + ZK as a **selective disclosure engine**. It can reduce data exposure compared to traditional forms.

**Tip:**
- Never put full PII or raw credentials onchain.
- Anchor minimal proofs onchain (e.g. `hash(data)`), and keep the rest offchain.
- Use circuits to reveal only the properties that matter (e.g. “I’m eligible” vs. “Here’s my identity”).

Privacy isn’t incompatible with attestations. It’s the point.

---

## Myth 4: “Attestations reintroduce trusted third parties.”

**Reality:** Trust doesn’t go away in crypto. But ZK + attestations let you choose how much and where to place it.

- You can use centralized issuers (e.g. banks, KYC providers, trusted oracles)
- Or decentralized ones (DAOs, registries, peers, agents)
- Or require **multiple attestations** to avoid single points of trust

Protocols like EAS make attestations programmable and flexible, not monolithic.

**Tip:**
- Avoid hardcoding a single issuer unless required.
- Maintain a registry of trusted attesters (or let governance manage it).  
- Accept multiple attestations and compare them in circuit or via resolver logic.  

---

## Myth 5: “ZK proofs guarantee everything is secure.”

**Reality:** ZK guarantees that a statement is **mathematically correct**, not that it’s **meaningful** or **safe**.

You can have:
- A valid proof for a bad claim (e.g. missing a key constraint)
- A working verifier that accepts junk data (e.g. didn't verify the signature of the attestation)
- A perfect circuit wrapped around a terrible trust assumption

ZK reduces *one class* of risk: tampering with the computation. But it won’t save you from bad product logic.

**What to do instead:**
- Test your circuits like critical backend logic.
- Audit your assumptions, not just the math.
- Validate:
  - Signature is from a trusted issuer that I care about 
  - Timestamp is appropriate for this claim
  - Attestation hasn’t been revoked or expired (still valid)
  - Circuit constraints match business logic

ZK is a trust primitive, not a forcefield.

---

## TLDR

| Myth | What To Remember |
|------|------------------|
| ZK is too slow | It depends on the flow. Many proofs run in seconds, and often only once. |
| ZK is too hard | You don’t need to do math. You do need to learn new patterns. |
| Attestations are anti-privacy | Only if you put too much onchain. Use hashes + ZK. |
| Attestations = centralization | You can distribute trust and verify multiple sources. |
| ZK means secure | Only if your circuit logic and assumptions are correct. |

---

These misconceptions hold a lot of builders back.

Now that we cleared the air, let’s build better.