import { GraphQLServer } from "graphql-yoga";

const hero = {
  name: "R2-D2",
};
const resolvers = {
  Query: {
    hero: () => hero,
  },
};

const server = new GraphQLServer({
  //typeDefs : 모든 타입들에 대한 정의
  typeDefs: "./graphql/schema.graphql",

  resolvers,
});

server.start(() => console.log("GraphQL Server Running"));
