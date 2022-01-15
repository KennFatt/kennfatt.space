require("dotenv").config({ path: "./.env.local" });

/** @type {import("apollo").ApolloConfig} */
const config = {
  client: {
    service: {
      name: "graphcms",
      url: process.env.GRAPHCMS_URI,
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
      includes: ["./src/graphql/**/*.{ts,graphql,gql}"],
      excludes: ["./src/graphql/model/**/*"],
      skipSSLValidation: true,
    },
  },
};

module.exports = config;
