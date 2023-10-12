import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco }  from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import emoji from 'remark-emoji';
import BlogDetailHeader from '@/components/blog/blogheader.component';
import Image from 'next/image';

export async function getServerSideProps(context) {
  const { slug } = context.query;
  // Use ajax to grab the markdown file.
  const resp =  await fetch('http://localhost:8080/blog/' + slug);
  const respJSON = await resp.json();


  const pdResp = await fetch(respJSON.contenturl);

  const contentType = pdResp.headers.get('Content-Type');
  
  const data = await pdResp.text();

  return {
    props: {
      post: respJSON,
      data: data,
      contentType: contentType,
    },
  };
}

const bufferToDataUrl = (type, buffer) => {
  return `data:${type};base64,${buffer.toString('base64')}`;
};


export default function BlogDetail({ post, data, contentType }) {

  const [pageData, setPageData] = useState(data);

  if (contentType.includes('image/png') || contentType.includes('image/jpeg') || contentType.includes('image/gif') ||  contentType.includes('image/svg+xml') || contentType.includes('image/svg xml')) {
      const imgString = bufferToDataUrl(contentType, pageData);

      return (
        <>
          <Image className="w-full max-w-full p-0 m-0" src={imgString} alt={post.title} height={'100%'} width={'100%'} />
        </>
      )
  }

  if (typeof pageData == 'string' || pageData instanceof String) {
    if (!post.contenturl.endsWith('.md')) {
      return ( 
        <section className="max-w-full w-full">
          <SyntaxHighlighter wrapLongLines={true} showLineNumbers={true} style={docco}>{data}</SyntaxHighlighter>
        </section>
      )
    } else {
      return (
        <>
          <BlogDetailHeader blog={post} />
          <ReactMarkdown className="prose w-full min-w-full max-w-full dark:prose-invert" remarkPlugins={[remarkFrontmatter, [emoji, {"emoticon": true}], remarkGfm]}>{data}</ReactMarkdown>

        </>
      )
    }
  }


}
