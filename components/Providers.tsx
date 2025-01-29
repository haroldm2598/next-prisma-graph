'use client';
import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
	// gql
} from '@apollo/client';

interface ProviderProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
	const client = new ApolloClient({
		uri: 'http://localhost:3000/api/graphql',
		cache: new InMemoryCache()
	});

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
