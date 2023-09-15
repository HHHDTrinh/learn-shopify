import { gql } from '@apollo/client';

export const productsQuery = gql`
  fragment FieldsForMediaTypes on Media {
    alt
    mediaContentType
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      embeddedUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
      }
    }
  }
  query getProductList {
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          handle
          description
          title
          totalInventory
          availableForSale
          variants(first: 5) {
            edges {
              node {
                id
                title
                quantityAvailable
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          media(first: 5) {
            edges {
              node {
                ...FieldsForMediaTypes
              }
            }
          }
        }
      }
    }
  }
`;

export const productQuery = gql`
  fragment FieldsForMediaTypes on Media {
    alt
    mediaContentType
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      embeddedUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
      }
    }
  }
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      handle
      description
      title
      totalInventory
      availableForSale
      variants(first: 5) {
        edges {
          node {
            id
            title
            quantityAvailable
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      media(first: 5) {
        edges {
          node {
            ...FieldsForMediaTypes
          }
        }
      }
    }
  }
`;

export const createCheckout = gql`
  mutation CreateCheckout($variantId: ID!, $quantity: Int!) {
    checkoutCreate(
      input: { lineItems: [{ variantId: $variantId, quantity: $quantity }] }
    ) {
      checkout {
        webUrl
      }
    }
  }
`;

export const createCheckoutWithCarts = gql`
  query checkoutURL($id: ID!) {
    cart(id: $id) {
      checkoutUrl
    }
  }
`;

export const createCarts = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                  }
                }
              }
            }
          }
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export const addToCart = gql`
  mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
    }
  }
`;

export const getCarts = gql`
  query getCarts($id: ID!) {
    cart(id: $id) {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      buyerIdentity {
        email
        phone
        customer {
          id
        }
        countryCode
        deliveryAddressPreferences {
          ... on MailingAddress {
            address1
            address2
            city
            provinceCode
            countryCodeV2
            zip
          }
        }
      }
    }
  }
`;

export const updateQuantity = gql`
  mutation updateQuantity($cartId: ID!, $lineId: ID!, $quantity: Int!) {
    cartLinesUpdate(
      cartId: $cartId
      lines: { id: $lineId, quantity: $quantity }
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export const removeItemCart = gql`
  mutation removeItemFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
