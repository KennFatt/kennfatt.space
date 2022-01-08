require("dotenv").config({ path: "./.env.local" });

module.exports = {
  client: {
    service: {
      name: "graphcms",
      url: process.env.GRAPHCMS_URI,
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
      includes: ["./src/**/*.{ts,tsx,graphql,gql}"],
      excludes: ["./src/generated/**/*"],
    },
  },
};
