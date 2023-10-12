'use client';
import { PageHeader } from '@/components/pageheader.component';

import BreadCrumbs from '@/components/breadcrumbs/breadcrumbs.component';

const MarkdownLayout = ({ children, diableBreadcrumbs, title }) => {
  return (
      <section className={"container"}>
            <PageHeader plainText={''} gradientText={title} />
    {!diableBreadcrumbs && <BreadCrumbs />}
            <div className="w-2/3 mx-auto p-6">
              {children}
            </div>
      </section>
  )
};
export default MarkdownLayout;

//    GRAVEYARD
//    <section className="bg-gray-50 dark:bg-gray-900 h-full">
//      <div className="container w-2/5 mx-auto p-8">
//        <PageHeader plainText={''} gradientText={trimPrefix(path, "/")} breadcrumbs={path} />
        // <ReactMarkdown className="prose min-w-fit dark:prose-invert" children={pageData} remarkPlugins={[remarkGfm]} />
    // </div>
    // </section>

