import { resolverType } from 'fast-graphql';
import { flights } from '@/data';

import * as schema from '@/graphql/generated/schemaType';

const Query = {
  flightList: (parent: any, args: any, ctx: any): schema.Query['flightList'] => {
    return flights;
  },

  flight: (parent: any, args: any, ctx: any) => {
    return flights.find((x) => x.id == args.id);
  },
};

const Mutation = {
  addFlight: (parent: any, args: any, ctx: any) => {
    return { title: 'this is addFlight mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
