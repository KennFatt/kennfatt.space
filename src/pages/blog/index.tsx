import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "types/custom-next-page.type";

const BlogIndexPage: NextPageWithLayout = () => {
  return <></>;
};

BlogIndexPage.getLayout = (_) => <PageBaseLayout pageName="Blog" />;

export default BlogIndexPage;
