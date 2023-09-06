import { shopifyApi } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';

const shopify = shopifyApi({
  apiKey: process.env.NEXT_PUBLIC_SHOPIFY_STORE_API_ACCESS_TOKEN,
  apiSecretKey: process.env.NEXT_PUBLIC_SHOPIFY_STORE_PRIVATE_API_ACCESS_TOKEN,
  scopes: ['read_products'],
  hostName: process.env.NEXT_PUBLIC_HOST_NAME,
});

export const storefrontClient = new shopify.clients.Storefront({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
});

export const productsQuery = `
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
    products(first: 5, reverse: true) {
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
