import type { NextPageWithLayout } from "lib/common-types";
import { PageBaseLayout } from "components/layout/PageBaseLayout";

const BlogIndexPage: NextPageWithLayout = () => {
  return <></>;
};

BlogIndexPage.getLayout = (_) => <PageBaseLayout pageName="Blog" />;

export default BlogIndexPage;
