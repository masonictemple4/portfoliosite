import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  { PageHeader }  from '@/components/pageheader.component';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import Feed from '@/components/markdown/feed.component';

export async function getServerSideProps(context) {
  const { path } = context.query;
  const res = await fetch(`http://localhost:8080/notes/${path}`);
  const contentType = res.headers.get('Content-Type');
  const buf =  await res.arrayBuffer();
  const data = Buffer.from(buf);

  return {
    props: {
      data: data.toString('base64'),
      contentType: contentType,
      path: path,
    },
  };
}

const bufferToDataUrl = (type, buffer) => {
  return `data:${type};base64,${buffer.toString('base64')}`;
};

const trimPrefix = (str, prefix) => {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
};

export default function NoteDetail({ data, contentType, path }) {

  const [pageData, setPageData] = useState(data);


  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/live/' + path);

    socket.onopen = function(e) {
      socket.send(JSON.stringify({"type": "authorization", "token": "test123"}));
      console.log('Socket opened');
    }

    socket.onmessage = function(e) {
      if (contentType.includes('application/json')) {
        var notes = JSON.parse(e.data.toString());
        console.log('notes', notes)
        setPageData(notes);
      } else if (!contentType.includes('application/json') && !contentType.includes('text/plain')) { 
        const decoded = JSON.parse(e.data.toString());
        const urlString = `data:${contentType};base64,${decoded.data}`;
        setPageData(decoded.data);
      }else {
        const decoded = JSON.parse(e.data.toString());
        const newData = atob(decoded.data);
        setPageData(newData);
      }
      console.log("socket data:", JSON.parse(e.data.toString('ascii')));
    }

    socket.onerror = function(e) {
      console.log('Socket error');
      console.log(e);
    }

    socket.onclose = function(e) {
      console.log('Socket closed');
    }


    return () => {
      socket.close();
    }

  }, [path]);


  if (contentType.includes('application/json')) {
      return (
        <>
          <Feed notes={pageData.files} />
        </>
      )
  }

  if (contentType.includes('image/png') || contentType.includes('image/jpeg') || contentType.includes('image/gif') ||  contentType.includes('image/svg+xml') || contentType.includes('image/svg xml')) {
      const imgString = bufferToDataUrl(contentType, pageData);

      return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50 dark:bg-gray-900">
          <section className="flex min-h-full flex-col items-center">
            <div className="flex flex-col items-center w-4/6 mx-auto">
                <PageHeader plainText={''} gradientText={trimPrefix(path, "/")} breadcrumbs={path} />
                <img className="h-full w-full" src={imgString} />
            </div>
          </section>
        </main>
      )
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full">
      <div className="container w-2/5 mx-auto p-8">
        <PageHeader plainText={''} gradientText={trimPrefix(path, "/")} breadcrumbs={path} />
        <ReactMarkdown className="prose min-w-fit dark:prose-invert" children={pageData} remarkPlugins={[remarkGfm]} />
      </div>
    </section>
  )


}
