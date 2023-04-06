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

- `limit` (optional): The maximum number of attestations to return. Default is 25 (max 100).
- `page` (optional): The page number for pagination. Default is 1.

### Example Request

```
GET https://easscan.org/api/getAttestations?limit=10&page=2
```

### Example Response

```json
[
  {
    "id": "0x9b3f928680e6679e0cebbebe60c82e51df559e5210d75096ba22286448651472",
    "data": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002474173207468652076657269666961626c6520636f6e74726f6c6c6572206f66204b6c65726f734578706572696d656e747344414f2773206578656375746976652066756e6374696f6e732c20776520636f6d6d697420746f207573696e672074686520436f757274206f66204b6c65726f7320666f7220616e7920756e7265736f6c76656420696e7465726e616c2064697370757465732077697468696e206f75722044414f20776865726520616c6c206661637473206f662074686520636173652063616e206265206d616465207075626c69632c207468726f75676820616e20616420686f63206172626974726174696f6e2070726f636573732e20576520616772656520746f206d757475616c6c792064657465726d696e65207468652073706563696669632072756c657320616e642070726f6365647572657320776974682074686520696e766f6c7665642070617274696573206174207468652074696d65206f662074686520646973707574652c207768696c65206d61696e7461696e696e67206f757220747275737420696e20746865204b6c65726f732050726f746f636f6c2e2054686973206174746573746174696f6e207265666c65637473206f757220636f6e666964656e636520696e2074686520646563656e7472616c697a65642064697370757465207265736f6c7574696f6e2073797374656d206f666665726564206279204b6c65726f7320616e64206f757220636f6d6d69746d656e7420746f207472616e73706172656e637920616e642061646170746162696c6974792e00000000000000000000000000000000000000000000000000",
    "recipient": "0xf313d85c7fEF79118fCD70498c71BF94E75Fc2F6",
    "attester": "0xf313d85c7fEF79118fCD70498c71BF94E75Fc2F6",
    "time": "1680685019",
    "timeCreated": "1680685025",
    "expirationTime": "0",
    "revocationTime": "0",
    "refUID": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "revocable": true,
    "revoked": false,
    "txid": "0x92609d8fc717cb6033547cbb8922d7c88da472a89804ef7a5a452ba5a1d325e8",
    "schemaId": "0xd29e7bf7c1a66ebbfccf30c8ee4b66128f3989ad0b73676be57f32fd51639244",
    "ipfsHash": "",
    "isOffchain": false,
    "schema": {
      "id": "0xd29e7bf7c1a66ebbfccf30c8ee4b66128f3989ad0b73676be57f32fd51639244",
      "schema": "string klerosDisputeResolutionPledge",
      "creator": "0xf313d85c7fEF79118fCD70498c71BF94E75Fc2F6",
      "resolver": "0x0000000000000000000000000000000000000000",
      "revocable": true,
      "index": "54",
      "txid": "0x282490ead784c9b0037f5352cb872d9f460180fe2187d00cba0928df0ea08f4a",
      "time": "1680684863"
    },
    "attesterEnsName": "klerosexperiments.eth",
    "recipientEnsName": "klerosexperiments.eth"
  },
  ...
]
```

## Get Attestations for Schema

**Endpoint:** `https://easscan.org/api/attestationsForSchema/[uid]`

This route returns all attestations for the given schema UID sorted in reverse time order.

### Parameters

- `uid` (required): The unique identifier of the schema.
- `limit` (optional): The maximum number of attestations to return. Default is 25 (max 100).
- `page` (optional): The page number for pagination. Default is 1.

### Example Request

```
GET https://easscan.org/api/attestationsForSchema/0x85500e806cf1e74844d51a20a6d893fe1ed6f6b0738b50e43d774827d08eca61?limit=10&page=2
```

### Example Response

```json
[
  {
    "id": "0x3016eb130d208787670175ec362b061ce8608d874a8a0d9450eb7056b453e5c2",
    // Data field can either be ABI encoded data if onchain or a SignedOffchainAttestation JSON object if offchain
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
