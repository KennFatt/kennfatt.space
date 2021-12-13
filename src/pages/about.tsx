import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "lib/common-types";

const AboutPage: NextPageWithLayout = () => {
  return <></>;
};

AboutPage.getLayout = (_) => <PageBaseLayout pageName="About" />;

export default AboutPage;
