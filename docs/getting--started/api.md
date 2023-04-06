---
sidebar_position: 2
---

# API Routes

This document provides a brief overview of the available API routes for EAS. The API allows you to fetch attestations data in a simple and efficient manner.

## Table of Contents

- [Get All Attestations](#get-all-attestations)
- [Get Attestations for Schema](#get-attestations-for-schema)

## Get All Attestations

**Endpoint:** `https://easscan.org/api/getAttestations`

This route returns all attestations sorted in reverse time order.

### Parameters

- `limit` (optional): The maximum number of attestations to return. Default is 25.
- `page` (optional): The page number for pagination. Default is 1.

### Example Request

```
GET https://easscan.org/api/getAttestations?limit=10&page=2
```

### Example Response

```json
[
  {
    "id": "0x3016eb130d208787670175ec362b061ce8608d874a8a0d9450eb7056b453e5c2",
    "data": "{\"sig\":{\"domain\":{\"name\":\"EAS Attestation\",\"version\":\"0.26\",\"chainId\":1,\"verifyingContract\":\"0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587\"},\"primaryType\":\"Attestation\",\"types\":{\"Attest\":[{\"name\":\"schema\",\"type\":\"bytes32\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"time\",\"type\":\"uint64\"},{\"name\":\"expirationTime\",\"type\":\"uint64\"},{\"name\":\"revocable\",\"type\":\"bool\"},{\"name\":\"refUID\",\"type\":\"bytes32\"},{\"name\":\"data\",\"type\":\"bytes\"}]},\"signature\":{\"r\":\"0x498bfc5954f6e65aff9d5bc02e4315bd3e042bf5dd52eede0348a20cdc340e2c\",\"s\":\"0x2c0bd3e95b612f9be058c8785fad6a8af6a77ff3135d83aaf15c55a312333eb3\",\"v\":27},\"uid\":\"0x3016eb130d208787670175ec362b061ce8608d874a8a0d9450eb7056b453e5c2\",\"message\":{\"schema\":\"0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61\",\"recipient\":\"0x0000000000000000000000000000000000000000\",\"time\":1680784319,\"expirationTime\":0,\"refUID\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"revocable\":true,\"data\":\"0x0000000000000000000000000000000000000000000000000000000000000001\",\"nonce\":0}},\"signer\":\"0x0fb166cDdF1387C5b63fFa25721299fD7b068f3f\"}",
    "recipient": "0x0000000000000000000000000000000000000000",
    "attester": "0x0fb166cDdF1387C5b63fFa25721299fD7b068f3f",
    "time": "1680784319",
    "timeCreated": "1680784631",
    "expirationTime": "0",
    "revocationTime": "0",
    "refUID": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "revocable": true,
    "revoked": false,
    "txid": "",
    "schemaId": "0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61",
    "ipfsHash": "QmfK3UgcbncZwDpn6wUekqvFktgguMxYjBbAfSLHQXLD2E",
    "isOffchain": true,
    "schema": {
      "id": "0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61",
      "schema": "bool gm",
      "creator": "0x0fb166cDdF1387C5b63fFa25721299fD7b068f3f",
      "resolver": "0x0000000000000000000000000000000000000000",
      "revocable": true,
      "index": "45",
      "txid": "0x2d89cd14f73b97512303c95632b7ec016b9bfb26cfeddb774066f7b40e48d04d",
      "time": "1678217159"
    },
    "attesterEnsName": "dakh.eth",
    "recipientEnsName": ""
  },
  ...
]
```

## Get Attestations for Schema

**Endpoint:** `https://easscan.org/api/attestationsForSchema/[uid]`

This route returns all attestations for the given schema UID sorted in reverse time order.

### Parameters

- `uid` (required): The unique identifier of the schema.
- `limit` (optional): The maximum number of attestations to return. Default is 25.
- `page` (optional): The page number for pagination. Default is 1.

### Example Request

```
GET https://easscan.org/api/attestationsForSchema/0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61?limit=10&page=2
```

### Example Response

```json
[
  {
    "id": "0x148f21a206eb88ce0c644a40ecf0086c4c1038be14066a40ac7eef711175ece0",
    "data": "{\"sig\":{\"domain\":{\"name\":\"EAS Attestation\",\"version\":\"0.26\",\"chainId\":1,\"verifyingContract\":\"0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587\"},\"primaryType\":\"Attestation\",\"types\":{\"Attest\":[{\"name\":\"schema\",\"type\":\"bytes32\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"time\",\"type\":\"uint64\"},{\"name\":\"expirationTime\",\"type\":\"uint64\"},{\"name\":\"revocable\",\"type\":\"bool\"},{\"name\":\"refUID\",\"type\":\"bytes32\"},{\"name\":\"data\",\"type\":\"bytes\"}]},\"r\":\"0x044337c8cb862834bdb2c2b531058e21425b4a628b421b9e93ed0c1841570d8d\",\"s\":\"0x2e8135f094b3d69e5081ff1a5edf5eb8dab6836ca3c77efded89df1bce45a79a\",\"v\":28,\"uid\":\"0x148f21a206eb88ce0c644a40ecf0086c4c1038be14066a40ac7eef711175ece0\",\"message\":{\"schema\":\"0x8af15e65888f2e3b487e536a4922e277dcfe85b4b18187b0cf9afdb802ba6bb6\",\"recipient\":\"0x0000000000000000000000000000000000000000\",\"time\":1680761806,\"expirationTime\":0,\"refUID\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"revocable\":true,\"data\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"nonce\":0}},\"signer\":\"0x04e8e5aA372D8e2233D2EF26079e23E3309003D5\"}",
    "recipient": "0x0000000000000000000000000000000000000000",
    "attester": "0x04e8e5aA372D8e2233D2EF26079e23E3309003D5",
    "time": "1680761806",
    "timeCreated": "1680761815",
    "expirationTime": "0",
    "revocationTime": "0",
    "refUID": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "revocable": true,
    "revoked": false,
    "txid": "",
    "schemaId": "0x8af15e65888f2e3b487e536a4922e277dcfe85b4b18187b0cf9afdb802ba6bb6",
    "ipfsHash": "QmVDNHdoZeuLhPKDDs85s8nHa8m92ZMfoqhqsbWZQLeij8",
    "isOffchain": true,
    "schema": {
      "id": "0x8af15e65888f2e3b487e536a4922e277dcfe85b4b18187b0cf9afdb802ba6bb6",
      "schema": "bool isHuman",
      "creator": "0x2bF22CAe1dc34f265cAE03F6ff419177b4f4FBb3",
      "resolver": "0x0000000000000000000000000000000000000000",
      "revocable": true,
      "index": "5",
      "txid": "0xa5cc31ecbd0834bd6ed59fe33dc8dd1960ad41fc7266a285acd42202f85b7f44",
      "time": "1677953015"
    },
    "attesterEnsName": "romuald.eth",
    "recipientEnsName": ""
  },
  ...
]
```
