---
sidebar_position: 9
---

# Online Reviews
EAS can be used to create verified reputation systems for online reviews, allowing customers to easily and securely share their attestations about their experiences with a product or service.

## Problem
Currently, online review platforms are vulnerable to fake or biased reviews, which can make it difficult for customers to trust the information they are reading.

## Solution
EAS provides a decentralized solution for securely creating, storing, and verifying attestations of verified reputation systems for online reviews. This would enable customers to share attestations about their experiences with a product or service providing a more secure and trustworthy way for customers to share their opinions and feedback, while also enabling companies to improve their reputation and trustworthiness.

## Example
A customer could create attestations about their satisfaction with a product or service. This could be done using a schema that includes information such as the customer's rating of the product or service, as well as any comments or feedback they may have.

The company could then use this information to improve its reputation and trustworthiness among potential customers. This could be done by displaying the attestations on the company's website or social media channels, or by integrating the information with existing online review platforms, such as Amazon or Google Reviews.

Additionally, the company could use EAS to create and verify attestations about its own trustworthiness and reputation, such as its commitment to quality and customer satisfaction, its use of sustainable and ethical manufacturing processes, and its support for local charities and community initiatives. This could provide customers with more detailed and transparent information about the company, enabling them to make more informed decisions about what products or services to purchase.

## Example schema
``` jsx
  address reviewer;
  string productName;
  uint256 rating;
  string review;
  uint256 timestamp;
```

## Example attestation
```jsx
"reviewer": "0xA726Bd2a4b7fC3B095F726Ce5C5a7E57b0D4B903",
"productName": "Apple iPhone 12",
"rating": 5,
"review": "Great phone! The camera is amazing and the battery life is impressive. Highly recommend it.",
"timestamp": 1623987217
```
## Example use cases to solve for
1. **Verifying the identity of reviewers**: By requiring reviewers to provide attestations about their identity, restaurant owners can be more confident that the reviews they are reading are from real people, rather than fake or anonymous accounts.

2. **Verifying the authenticity of reviews**: By requiring reviewers to provide attestations about their dining experience, such as the date and time of their visit, the name of their server, and the dishes they ordered, restaurant owners can be more confident that the reviews they are reading are genuine and accurate.

3. **Providing proof of experience**: By requiring reviewers to provide attestations about their dining experience, such as the number of visits they have made to the restaurant, the type of food they typically order, and their overall satisfaction with the service and food, restaurant owners can gain valuable insights into the preferences and behaviors of their regular customers.

4. **Improving the trustworthiness of reviews**: By providing a secure and transparent way to verify the identity and authenticity of reviewers and their reviews, attestations can help to improve the trustworthiness and reliability of online restaurant reviews, which can help to improve the overall quality of the dining experience for both customers and restaurant owners.

5. **Enhancing the customer experience**: By allowing customers to easily verify the identity and authenticity of reviewers and their reviews, attestations can help to enhance the customer experience by providing more accurate and reliable information about the quality of the restaurant and its food. This can help customers to make more informed and confident dining decisions, and can also help restaurant owners to improve the quality of their service and food.

## Example business ideas
1. **Reputation Rave** - a platform that uses EAS to verify the authenticity and trustworthiness of online reviews for restaurants and other businesses, allowing customers to make informed decisions based on verified reviews.

2. **Honest Bites** - a restaurant review website that exclusively uses EAS to verify the identity and dining experiences of reviewers, ensuring that all reviews are genuine and accurate.

3. **VeriVino** - a wine review and recommendation platform that uses EAS to verify the expertise and credentials of reviewers, providing customers with trustworthy and reliable information about different wines and wineries.

4. **Trusty Trade** - an online marketplace that uses EAS to verify the identity and reputation of sellers, providing buyers with confidence in the quality and trustworthiness of the products and services they are purchasing.

5. **Verified Vacation Rentals** - a vacation rental platform that uses EAS to verify the identity and trustworthiness of hosts and their properties, ensuring that customers have a safe and enjoyable experience during their stay.

## Future composability
In the future, the composability of EAS could enable more advanced and flexible solutions for verified reputation systems for restaurants. For example, EAS could be integrated with blockchain-based food supply chain systems to enable customers to verify the authenticity and provenance of the food they are eating. This could be used to create more transparent and secure food supply chains, while also providing customers with a more detailed and verifiable record of the food they are consuming.

Overall, the use of EAS for verified reputation systems for restaurants could benefit both customers and restaurants by providing a more secure, efficient, and transparent way to manage and verify reputation data. This could ultimately enhance the trust and confidence of customers in the restaurant industry, and enable restaurants to build and maintain their reputation and trustworthiness in the digital economy.