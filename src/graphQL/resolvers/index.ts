import { IResolvers } from "graphql-tools";
import testResolver from './testResolver';

const resolvers: IResolvers = {
    Query: {
        ...testResolver
    }
}

export default resolvers;