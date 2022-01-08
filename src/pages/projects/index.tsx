import { PageBaseLayout } from "components/layout/PageBaseLayout";

import type { NextPageWithLayout } from "types/custom-next-page.type";

const ProjectsIndexPage: NextPageWithLayout = () => {
  return <></>;
};

ProjectsIndexPage.getLayout = () => <PageBaseLayout pageName="Projects" />;

export default ProjectsIndexPage;
