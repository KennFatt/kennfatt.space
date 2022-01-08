import type { NextPageWithLayout } from "types/custom-next-page.type";

import { PageBaseLayout } from "components/layout/PageBaseLayout";

const BlogIndexPage: NextPageWithLayout = () => {
  return <></>;
};

BlogIndexPage.getLayout = (_) => <PageBaseLayout pageName="Blog" />;

export default BlogIndexPage;
