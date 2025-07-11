---
sidebar_position: 1
---

# Overview
Interested in **zk+attestations**? This playbook is for *you*. 

----
## Welcome
![Overview ZK + Attestations](./img/offchainzkpflow-example.png)

If you're reading this, **you're early**. Not just early to a tool, but early to a new pattern of building on Ethereum. Being early means you're building on the frontier before tooling is ready, and sketching paths where **maps don't exist**. 

This playbook is our first edition of clearing that path for **zk + attestations**. It's written for people building the future and want to make an impact on Ethereum.

Here's what you'll find inside:
- A quick breakdown of **how ZK proofs and attestations actually work** together
- A **15-minute quickstart** you can run locally
- **Real-world design flows** and reusable patterns
- **Practical advice** for builders and product thinkers shipping privacy-first apps

Our goal? **Help you build faster**. And help ZK + attestations feel like something you can actually use, not just read about.

> This playbook is created as a result of a zk research grant and support from the **Ethereum Foundation**.

### What We're Solving For
The question behind the research is simple but still unsolved:

> **"What's the best way to generate zero-knowledge proofs from attestations?"**

Ethereum is the world's programmable trust layer. But even if we solved scaling and fees overnight, most apps still can't *prove things without revealing everything*. We lack a privacy-preserving UX built on *trustable data*. 

That's where **zk + attestations** come in.

### ZK + Attestations = Superpower.
When you combine attestations (structured, signed data) with zkps (privacy-preserving computation / scalability), you unlock a new design space:

> **Provable claims, made privately.**

If we get this right, we can build things like:
- Privacy-preserving proof of identity, income, or employment
- ZK ticketing, voting, and reputation systems
- Marketplaces and registries with offchain provenance
- Autonomous agents that act on verified claims
- Signed offchain data that can be proven on Ethereum


### But the dev experience is broken.
Right now, building ZK attestations means you're dealing with:
- Fragmented tooling and libraries with confusing language
- ZK and attestations that are two separate universes
- No simple way to generate a proof from an arbitrary attestation  
- Performance and security issues show up late in prod or audits  

The reality is it's **hard**, and it's slowing everyone down and the progress towards impactful use cases.


---

## What This Playbook Covers

This is not a whitepaper. It's a **playbook** for builders. We'll walk you through:

- **The core mental model**—why ZK + attestations is a powerful combo
- **A 15-minute quickstart**—prove "age > 18" with a working demo using SP1
- **Common challenges**—and how to avoid them before they cost you time or privacy risks
- **Reusable patterns**—battle-tested flows for apps and infra
- **Real tooling**—plus a 3–6 month roadmap you can plug into today

Whether you're privacy-pilling your next app, building identity flows, or just exploring zkVMs and offchain attestations, you'll find something actionable here.

---

## Who This Is For

- **Developers** building with attestations, ZK, or both—and want to build faster and confidently.
- **Product thinkers** shaping privacy-preserving UX, auth, or verification flows.
- **Hackathon teams** looking to ship fast and smart with modern primitives.

---

## Get Involved

We're building this playbook out in the open. It's part tutorial, part invitation.

- Found a bug or idea? [Open an issue or PR](https://github.com/ethereum-attestation-service).  
- Want to share your example or tool? Let's feature it.  
- Running a hackathon? Use this as your privacy toolkit.  

The EAS ecosystem is bigger than any one team and we want this to grow with the community.

---

## Let's Build

The primitives are here. It's still day one.