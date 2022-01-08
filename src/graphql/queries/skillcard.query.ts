import { gql } from "@apollo/client";

export const QUERY_ALL_SKILLCARDS = gql`
query AllSkillCards {
  skillCards(stage: PUBLISHED, locales: en) {
    ...SkillOverview
  }
}

fragment SkillOverview on SkillCard {
  id
  name
  description
  illustrationImage {
    url
  }
  imageBackgroundColor {
    hex
  }
}`;
