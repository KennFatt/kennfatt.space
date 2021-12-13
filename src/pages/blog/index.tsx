import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "lib/common-types";

const BlogIndexPage: NextPageWithLayout = () => {
  return <></>;
};

BlogIndexPage.getLayout = (_) => <PageBaseLayout pageName="Blog" />;

export default BlogIndexPage;
