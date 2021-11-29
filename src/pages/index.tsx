import type { NextPage } from "next";

import { PageBaseLayout } from "components/layout/PageBaseLayout";
import { Hero } from "components/blocks/Hero";

const Home: NextPage = () => {
  return (
    <PageBaseLayout>
      <Hero />
    </PageBaseLayout>
  );
};

export default Home;
