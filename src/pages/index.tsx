import type { NextPage } from "next";

import { PageBaseLayout } from "components/layout/PageBaseLayout";
import { Hero } from "components/blocks/Hero";
import { CollaborationCta } from "components/blocks/CollaborationCta";

const Home: NextPage = () => {
  return (
    <PageBaseLayout>
      <Hero />
      <CollaborationCta />
    </PageBaseLayout>
  );
};

export default Home;
