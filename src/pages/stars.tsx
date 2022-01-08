import type { NextPageWithLayout } from "types/custom-next-page.type";

import { PageBaseLayout } from "components/layout/PageBaseLayout";

const StarsPage: NextPageWithLayout = () => {
  return <></>;
};

StarsPage.getLayout = () => <PageBaseLayout pageName="Stars" />;

export default StarsPage;
