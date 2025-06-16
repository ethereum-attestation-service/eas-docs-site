---
sidebar_position: 9
---

# What to Build
*Build now use cases and when to think about zk attestations.*
>
**Mental model** 
*attestation* → the durable fact anyone can reference (ownership, “KYC-passed”, ballot counted).
*zkp* → the privacy / compression wrapper that shows the fact is legit without exposing data.
When do you need both?
- "The fact will be reused and"
- "The supporting data is either bulky or private."
>

Keep that in your head as you scan the sections below.

![zkIdeas](./img/zkIdeas.png)

----
## 1. ZK Voting with Attestations
**Why this combo works**
- attestation nails down eligibility and, later, the final tally. Instantly auditable.
- zkp keeps each voter’s choice and identity under wraps.

**Flow**
1. Voter signs an offchain ballot (Yes / No).
2. zkp shows the ballot is valid.
3. Counting contract verifies proof → increments tally → nullifies ballot to prevent double counting.
4. Contract emits `VoteAccepted` attestation, any dashboard can stream results in real time.

**When to skip one**
- Skip zk if secrecy doesn’t matter (e.g., board roll-call).
- Skip attestation if the vote is a one-shot private roll-up no one needs to reference later.

**Ideas:** 
- Build a Farcaster poll widget for voting on apps you want to see built.
- Launch an encrypted onchain suggestion box that emits a tally without exposing messages for any ecosystem.
- Build a MACI-lite plugin using EAS offchain attestations as voter registry.
- Enable anonymous Conference polls for live sessions using ENS + zk + attestations.

----
## 2. ZK Ticketing
**Why this combo works**
- attestation = “this QR code is a live ticket”.
- zkp = “ticket is unspent” without exposing who’s holding it.

Check-in contract burns (revokes) the ticket attestation the moment the proof verifies.

**Skip logic**
- Small meet-ups? A plain allow-list is cheaper. Stadium show? You’ll want zk for privacy and anti-scalping batching.

**Ideas:** 
- Pop-up event check-in: verify proof → auto-revoke ticket → hand the lanyard.
- Build a ticket resale miniapp where buyers prove ticket validity without revealing seller identity.

----
## 3. Privacy-Preserving Identity & Status Proofs
**Why this combo works**
- attestation stores the binary flag (18+, salary ≥ $90 k, attended DevCon).
- zkp convinces anyone the underlying doc or GPS check is real—no docs leaked.

Use both when the same fact unlocks lots of dApps (games, lenders, gated Discords).

**Skip logic**
- One-time onboarding → zk alone may suffice.
- Data not sensitive → attestation alone is faster and cheaper.

**Ideas:** 
- Age-verified NFT mint
- Proof of location (using Atlas!)
- Combining with zkTLS (zkTLS proof of balance → verification attestation emitted after)
- Issue zk badge proving employment at a certain company without revealing which department (Icebreaker!)

----
## 4. Tokenization & Compliance Guardrails
**Why this combo works**
- attestation tags a wallet “US-accredited”, “EU-resident”, etc. Smart contracts read it every transfer.
- zkp keeps the investor docs sealed yet auditable by regulators.

**Skip logic**
Inside a closed sandbox, plain attestations might do. Cross-border? Bring zk.

**Ideas:** 
- Drop-in ERC-20 transfer hook that blocks wallets missing an accredited-investor attestation.
- Build a launchpad that uses zk-compliance attestation checks to whitelist users.
- Allow any zk proof to be generated from different doc/title types for real assets.

## 5. ZK Marketplaces & Registries
**Why this combo works**
- attestation captures the tradable summary of the asset: owner, lien-free, etc.
- zkp wraps deeds, inspections, or private pricing.

Buyers can demand a fresh proof at escrow time; the chain only stores what every trader needs.

**Ideas:**
- “Clean-title NFT” escrow
- zk land registry with attestations proving surveyor-inspected land boundaries.
- Build a car registry where buyers prove lien-free status without disclosing previous owners.

----

## 6. Agent-Signed Actions & Audit Trails
**Why this combo works**
- attestation ties a bot key to its human and logs every top-level action.
- zkp compresses thousands of internal steps into “never broke policy X.”

**Skip logic**
If the bot never touches onchain assets, a zk audit alone may do. Onchain composability? You’ll want the attestations. 

**Ideas:**
- zk audit trail of AI actions on sensitive data, with summary attestations posted to chain.
- LLM inference checker that proves no forbidden dataset slipped through, then stamps an attested “SafeToUse” badge.
- Agents that summarize onchain transactions and self-attest to compliance score.

## 7. ZK Healthcare (Prescriptions & Credentials)
**Why this combo works**
- attestation publishes the minimal clinical fact—Rx hash, dosage, expiry, vax date.
- zkp shows the prescription or vaccine record is genuine without exposing PHI.
- zk proof of insurance coverage for walk-in clinics, verified without exposing identity

Pharmacy contract verifies proof, dispenses, and revokes reuse in one transaction.

**Ideas:**
- Telehealth Rx flow where the pharmacist sees dose & expiry only; same stack flips into a border-crossing vax pass.

## 8. Bridging Web2 Data Onchain
**Why this combo works**
- attestation stores “API payload hash ⇒ condition met”.
- zkp shows the payload really came from the server (zkTLS / zkVM) and hit the threshold.

Smart contracts now rely on the fact without trusting a lone oracle.

**Skip logic**
If you already trust one oracle signer, an attestation alone is fine. Add zk when “trust, but verify” turns into “verify, don’t trust”.

**Ideas:**
- Bank-statement oracle for DeFi underwriters or 
- Flight-delay insurance that self-executes if you prove you hold a ticket but not which one.
- Rental application: zk proof of 3 months of income → generates signed "TenantQualified" EAS record.