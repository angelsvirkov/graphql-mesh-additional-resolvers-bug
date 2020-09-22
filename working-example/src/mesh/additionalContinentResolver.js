const resolvers = {
  Continent: {
    testProperty: async (root, args, context) => {
      return "TestPropertyString";
    },
  },
};

module.exports = { resolvers };
