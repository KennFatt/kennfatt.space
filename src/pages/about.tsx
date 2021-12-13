import type { NextPageWithLayout } from "lib/common-types";
import { PageBaseLayout } from "components/layout/PageBaseLayout";

const AboutPage: NextPageWithLayout = () => {
  return <></>;
};

AboutPage.getLayout = (_) => <PageBaseLayout pageName="About" />;

export default AboutPage;
