---
sidebar_position: 2
---

# GraphQL API

Welcome to the Easscan GraphQL API documentation! This API allows you to access various attestation and schema data and perform queries using the GraphQL endpoint located at:

[https://easscan.org/graphql](https://easscan.org/graphql)

## Introduction

GraphQL is a query language for your API, and a runtime for executing those queries against your data. With GraphQL, you can request exactly the data you need and nothing more, making it an efficient and flexible solution for client-server communication.

## Getting Started

To get started with the Easscan GraphQL API, you need to send an HTTP POST request to the endpoint with a JSON payload containing your GraphQL query.

Here's an example of how to make a request using `curl`:

```bash
curl --request POST \
    --header 'content-type: application/json' \
    --url 'https://easscan.org/graphql' \
    --data '{"query":"query Attestations {\n  attestations(take: 25) {\n    id\n    attester\n    recipient\n    refUID\n    revocable\n    revocationTime\n    expirationTime\n    data\n  }\n}","variables":{}}'
```

## Playground

To help you test and explore the API, we provide an interactive GraphQL Playground. The playground allows you to write queries, explore the schema, and see the results of your queries in real-time.

[https://easscan.org/graphql/playground](https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Feasscan.org%2Fgraphql%2Fplayground)

## Example Queries

### Get the latest 25 attestations

```graphql
query Attestations {
  attestations(take: 25, orderBy: {time: desc}) {
    id
    attester
    recipient
    refUID
    revocable
    revocationTime
    expirationTime
    data
  }
}
```

### Get a specific Attestation by UID

```graphql
query Attestation {
  attestation(
    where: { id: "0xa4fb0ad1e13efbb38e466af0cb59822cae7f9ea26f26dd34ddb09c76ee9dbb12" }
  ) {
    id
    attester
    recipient
    refUID
    revocable
    revocationTime
    expirationTime
    data
  }
}
```
