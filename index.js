import { GraphQLServer } from "graphql-yoga";
import { getMovies } from "./db/db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

const server = new GraphQLServer({
  //typeDefs : 모든 타입들에 대한 정의
  typeDefs: "./graphql/schema.graphql",

  resolvers,
});

server.start(() => console.log("GraphQL Server Running"));

//mutation에서 id는 필요없는듯? 자동생성된대?..
