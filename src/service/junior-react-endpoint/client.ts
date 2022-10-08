import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client: Client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),

})

type Client = ApolloClient<any>