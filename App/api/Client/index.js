import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localeyz-app-staging-api.herokuapp.com/graphql',

  cache: new InMemoryCache(),
});
export default client;
