import _fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// CORS
// https://community.shopify.com/c/technical-q-a/apollo-graphql-client-not-receiving-data/td-p/932248

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token':
        process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
      Accept: 'application/graphql',
    },
    fetch: _fetch,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache', //Need this to get full response
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    },
    queries: {
      refetchOnWindowFocus: false,
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});
