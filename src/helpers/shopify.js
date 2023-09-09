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
