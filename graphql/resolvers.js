const hero = {
  name: "R2-D2",
};
const resolvers = {
  Query: {
    hero: () => hero,
  },
};

export default resolvers;
