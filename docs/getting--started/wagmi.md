---
title: Integrating eas-sdk with wagmi library
sidebar_label: Using SDK with wagmi
---


Since `wagmi` now no longer uses `ethers` and instead uses a new library called `viem`, users need to convert the `viem` style `publicClient` and `walletClient` to `ethers` style `provider` and `signer` to use the `eas-sdk`.

### Using useSigner and useProvider Hooks

The two hooks, `useSigner` and `useProvider`, make this conversion easy for you. You don't need to install a whole separate library to do this conversion, simply add [these](https://gist.github.com/slavik0329/2e5b6fc31cb745b65d3d37f7cf1d7b36) hooks to your project.

#### **useSigner Hook**

The `useSigner` hook gets the `walletClient` and returns a signer compatible with `ethers`.

Usage:

```typescript
const signer = useSigner();
```

#### **useProvider Hook**

The `useProvider` hook gets the `publicClient` and returns a provider compatible with `ethers`.

Usage:

```typescript
const signer = useProvider();
```

### Code Implementation

You can find the code for the `useSigner` and `useProvider` hooks [here](https://gist.github.com/slavik0329/2e5b6fc31cb745b65d3d37f7cf1d7b36).

This code imports necessary types from `wagmi` and `viem`, and defines two conversion functions (`publicClientToProvider` and `walletClientToSigner`) along with the two hooks.

