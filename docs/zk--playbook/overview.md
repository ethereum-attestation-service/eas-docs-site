---
sidebar_position: 1
---

# Overview
Interested in zk+attestations? This playbook is for you. 

----
## Welcome
If you’re reading this, you’re early. Not just early to a tool, but early to a new pattern of building on Ethereum. Being early means you're building on the frontier before tooling is ready, and sketching paths where maps don't exist. 

This playbook is our first edition of clearing that path for **zk + attestations**. It's written for people building the future and want to make an impact on Ethereum.

Here’s what you’ll find inside:
- A quick breakdown of how ZK proofs and attestations actually work together
- A 15-minute quickstart you can run locally
- Real-world design flows and reusable patterns
- Practical advice for builders and product thinkers shipping privacy-first apps

Our goal? Help you build faster. And help ZK + attestations feel like something you can actually use, not just read about.


### What We're Solving For
This playbook is part of a Zero-Knowledge research grant from the Ethereum Foundation. The question behind it is simple but still unsolved:

> **“What’s the best way to generate zero-knowledge proofs from attestations?”**

Ethereum is the world’s programmable trust layer. But even if we solved scaling and fees overnight, most apps still can’t *prove things without revealing everything*. We lack a privacy-preserving UX built on *trustable data*. 

That’s where **zk + attestations** come in.

### ZK + Attestations = Superpower.
When you combine attestations (structured, signed data) with zero-knowledge proofs (privacy-preserving computation / scalability), you unlock a new design space:

> **Provable claims, made privately.**

If we get this right, we can build things like:
- Privacy-preserving proof of identity, income, or employment
- ZK ticketing, voting, and reputation systems
- Marketplaces and registries with offchain provenance
- Autonomous agents that act on verified claims
- Signed offchain data that can be proven on Ethereum


### But the dev experience is broken.
Right now, building ZK attestations means you're dealing with:
- Fragmented tooling and libraries with complex jargon
- ZK and attestations feel like two separate universes
- There's no simple way to generate a proof from an arbitrary attestation  
- Performance and security gotchas show up late in prod, or worse, in audits  

It’s **hard as hell**, and it’s slowing everyone down.


---

## What This Playbook Covers

This is not a whitepaper. It’s a **playbook** for builders. We’ll walk you through:

- **The core mental model**—why ZK + attestations is a trust layer with privacy
- **A 15-minute quickstart**—prove “age > 18” with a working demo
- **Common pitfalls**—and how to dodge them before they cost you
- **Reusable patterns**—battle-tested flows for apps, agents, and infra
- **Real tooling**—plus a 3–6 month roadmap you can plug into today

Whether you’re privacy-pilling your next app, building identity flows, or just exploring zkVMs and offchain attestations, you’ll find something actionable here.

---

## Who This Is For

- **Developers** building with attestations, ZK, or both—and want to build faster and confidently.
- **Product thinkers** shaping privacy-preserving UX, auth, or verification flows.
- **Hackathon teams** looking to ship fast and smart with modern primitives.

---

## Get Involved

We’re building this playbook out in the open. It’s part tutorial, part invitation.

- Found a bug or idea? [Open an issue or PR](https://github.com/ethereum-attestation-service).  
- Want to share your example or tool? Let’s feature it in the next edition.  
- Running a hackathon? Use this as your privacy toolkit.  

The EAS ecosystem is bigger than any one team—we want this to grow with the community.

---

## Let’s Build

The primitives are here. It's still day one.