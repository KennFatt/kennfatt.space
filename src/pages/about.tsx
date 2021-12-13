import { SectionHead } from "components/base/SectionHead";
import { Section } from "components/blocks/Section";
import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "lib/common-types";

const AboutPage: NextPageWithLayout = () => {
  return (
    <Section hasVerticalPadding centerContent>
      <SectionHead
        title="How i can help"
        description="Culpa cillum deserunt mollit cillum dolor Lorem et aliqua."
      />
      <p>Reprehenderit ipsum consequat exercitation nisi.</p>
    </Section>
  );
};

AboutPage.getLayout = (page) => (
  <PageBaseLayout pageName="About">{page}</PageBaseLayout>
);

export default AboutPage;
