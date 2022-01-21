import { GraphQLServer } from "graphql-yoga";
import { getById, movies, getMovies, addMovie } from "./db/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

const server = new GraphQLServer({
  //typeDefs : 모든 타입들에 대한 정의
  typeDefs: "./graphql/schema.graphql",

  resolvers,
});

server.start(() => console.log("GraphQL Server Running"));

//mutation에서 id는 필요없는듯? 자동생성된대?..
