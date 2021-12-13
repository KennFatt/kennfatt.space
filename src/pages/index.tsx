import { CollaborationCta } from "components/blocks/CollaborationCta";
import { Hero } from "components/blocks/Hero";
import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "lib/common-types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <CollaborationCta />
    </>
  );
};

Home.getLayout = (page) => {
  return <PageBaseLayout>{page}</PageBaseLayout>;
};

export default Home;
