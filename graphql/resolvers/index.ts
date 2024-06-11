import { combineResolvers, resolverType } from 'fast-graphql';

import user from './user';
import place from './place';
import review from './review';
import flight from './flight';

const resolvers: resolverType[] = [place, user, review, flight];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
