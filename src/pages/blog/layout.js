'use client';
import { PageHeader } from '@/components/pageheader.component';

import BreadCrumbs from '@/components/breadcrumbs/breadcrumbs.component';

const MarkdownLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gray-50 dark:bg-gray-900 h-full min-h-full">
      <section className={""}>
            <PageHeader plainText={''} gradientText={"The Software Engineer's Quarry"} />
            <BreadCrumbs />
            <div className="container w-5/6 p-3">
              {children}
            </div>
      </section>
    </main>
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

