import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "types/custom-next-page.type";

const AboutPage: NextPageWithLayout = () => {
  return <></>;
};

AboutPage.getLayout = (_) => <PageBaseLayout pageName="About" />;

export default AboutPage;
