---
sidebar_position: 8
---

# Proof of Provenance

## Problem
Counterfeit goods are a significant problem in the global market. Consumers are often unaware of the true origin of the products they buy, leading to a loss of revenue for legitimate businesses and potential harm to consumers who may unknowingly purchase harmful or low-quality goods. Further, supply chains can be long and complex, making it difficult to track the origin of a product.

## Opportunity
Blockchain-based attestations can provide a solution to this problem by creating a transparent and immutable record of a product's provenance. By creating verifiable claims about the origin, authenticity, and ownership of a product, we can create a reputation system that builds trust between producers, distributors, retailers, and consumers. This will enable individuals and organizations to authenticate the parties they are dealing with and to restore trust in the origin of goods.

## Example
Alice is a farmer who produces organic vegetables. She wants to ensure that her customers can trust the origin of her products and that they are genuinely organic. To do this, Alice creates an attestation that references a hash of the batch number, along with the location and date of production.

Bob is a distributor who wants to ensure that the products he sells are genuinely organic and are sourced from reputable producers. To do this, Bob verifies the product batch is from Alice and makes an attestation that references Alice's attestation, attesting to the authenticity of the products.

Once the products are shipped to retailers, customers can also verify and make further attestations to the validity and authenticity of the products. This provides additional layers of verification and helps to establish trust in the origin of the products being provided.

This approach provides a simple and secure way to ensure the provenance of goods in the supply chain. By using attestations, producers, distributors, retailers, and consumers can create a reputation system that builds trust between each other.

## Sample Schema
This schema assumes that the attestor is the manufacturers address. The `productID` can be a unique identifier for a specific product that includes all necessary information such as product name, manufacturer, and other relevant details. As the product is sold and moved throughout the supply chain there can be an immutable chain of record showing where the product originated and where it ended up. This would be verifiable through the chain of attestations made throughout the supplychain process.


```bash jsx
bytes32 productID
bytes32 batchNumber
string locationOfProduction
uint64 dateOfProduction
```


## Future Composability 
With the use of attestations for proof of provenance, we can create a reputation system for product producers, distributors, retailers, and consumers, which can help to combat counterfeit goods, fraud, and forgery. This can be extended to other industries, such as art, luxury goods, and pharmaceuticals, where verifiable claims can be used to prove the origin, authenticity, and ownership of a product. By building a decentralized ledger of provenance, we can ensure that the integrity and authenticity of products are maintained, providing a foundation for trust in the global market.

