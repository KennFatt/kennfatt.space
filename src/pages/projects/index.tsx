import type { NextPageWithLayout } from "types/custom-next-page.type";

import { PageBaseLayout } from "components/layout/PageBaseLayout";

const ProjectsIndexPage: NextPageWithLayout = () => {
  return <></>;
};

ProjectsIndexPage.getLayout = () => <PageBaseLayout pageName="Projects" />;

export default ProjectsIndexPage;
