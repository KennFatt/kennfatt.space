import type { NextPageWithLayout } from "types/custom-next-page.type";

import { PageBaseLayout } from "components/layout/PageBaseLayout";

const AboutPage: NextPageWithLayout = () => {
  return <></>;
};

AboutPage.getLayout = (_) => <PageBaseLayout pageName="About" />;

export default AboutPage;
