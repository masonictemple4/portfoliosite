import { MD_RESUME_URL } from "@/utils/globals";
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import emoji from 'remark-emoji';
import { PDF_RESUME_URL } from "@/utils/globals";

export async function getServerSideProps(context) {
  const pdResp = await fetch(MD_RESUME_URL + '?ignoreCache=1');

  const contentType = pdResp.headers.get('Content-Type');

  const data = await pdResp.text();

  return {
    props: {
      data: data,
      contentType: contentType,
    },
  };
}

export default function Resume({ data, contentType }) {

  const [pageData, setPageData] = useState(data);

  async function downloadResume() {
    const pdfDownload = await fetch(PDF_RESUME_URL + '?ignoreCache=1');
    const arrBuff = await pdfDownload.arrayBuffer();

    const buffData = Buffer.from(arrBuff);

    const newB = new Buffer.from(buffData.toString('base64'), 'base64');

    const blob = new Blob([newB], { type: 'application/pdf' });


    console.log('blob', blob.text());
    const fileURL = URL.createObjectURL(blob);

    console.log('fileURL', fileURL);

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'resume.pdf';
    link.click();

    URL.revokeObjectURL(fileURL);

  }

  if (typeof pageData == 'string' || pageData instanceof String) {
      return (
        <>
          <div className="flex flex-row items-center w-full max-w-full min-w-full -mt-8 mb-8">
            <button className="flex items-center justify-center w-full font-bold py-2 px-4 rounded border border-gray-200 hover:ring hover:ring-sky-400 hover:ring-offset-emerald-600"
        onClick={downloadResume}>
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
              <span>Download</span>
            </button>
          </div>
          <ReactMarkdown className="prose w-full min-w-full max-w-full dark:prose-invert" children={data} remarkPlugins={[remarkFrontmatter, [emoji, {"emoticon": true}], remarkGfm]} />
        </>
      )
  }

}
