import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "types/custom-next-page.type";

const StarsPage: NextPageWithLayout = () => {
  return <></>;
};

StarsPage.getLayout = () => <PageBaseLayout pageName="Stars" />;

export default StarsPage;
