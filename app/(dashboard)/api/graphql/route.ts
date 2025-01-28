import { prisma } from '@/prisma/db';
import { PrismaClient } from '@prisma/client';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';

export type Context = {
	prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({
	typeDefs,
	resolvers
});

const handler = startServerAndCreateNextHandler(apolloServer, {
	context: async (res, req) => ({ res, req, prisma })
});

export { handler as GET, handler as POST };
