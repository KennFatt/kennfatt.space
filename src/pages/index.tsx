import { AllSkillCards } from "graphql/model/AllSkillCards";
import { QUERY_ALL_SKILLCARDS } from "graphql/queries/skillcard.query";
import { GetStaticProps } from "next";
import type { NextPageWithLayout } from "types/custom-next-page.type";

import { CollaborationCta } from "components/blocks/CollaborationCta";
import { Hero } from "components/blocks/Hero";
import { HowICanHelp } from "components/blocks/HowICanHelp";
import { IHowICanHelp } from "components/blocks/HowICanHelp";
import { PageBaseLayout } from "components/layout/PageBaseLayout";

import { apolloClient } from "lib/apollo.client";

interface IHome {
  howICanHelpSection: IHowICanHelp;
}

const Home: NextPageWithLayout<IHome> = ({ howICanHelpSection }) => {
  return (
    <>
      <Hero />
      <HowICanHelp skillCards={howICanHelpSection.skillCards} />
      <CollaborationCta />
    </>
  );
};

Home.getLayout = (page) => {
  return <PageBaseLayout>{page}</PageBaseLayout>;
};

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const { data, error } = await apolloClient.query<AllSkillCards>({
    query: QUERY_ALL_SKILLCARDS,
  });

  const props: IHome = {
    howICanHelpSection: {
      skillCards: error
        ? []
        : data.skillCards.map(
            ({
              id,
              name,
              description,
              illustrationImage,
              imageBackgroundColor,
            }) => ({
              id,
              name,
              description,
              imageSrc: illustrationImage.url,
              circleBackgroundColor: imageBackgroundColor?.hex,
            })
          ),
    },
  };

  return { revalidate: 60, props };
};

export default Home;
