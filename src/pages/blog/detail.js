import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco }  from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import remarkGfm from 'remark-gfm';
import Feed from '@/components/markdown/feed.component';

export async function getServerSideProps(context) {
  const { path } = context.query;
  // TODO: Need to set this in an env variable
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
  const [ogSocket, setSocket] = useState(null);




  // TODO: Figure out how to clean up socket on page change if i hit the back button
  // then revisit the same page i end up with more than one active ws session to the file.
  useEffect(() => {
    ogSocket?.close();

    const socket = new WebSocket('ws://localhost:8080/live/' + path);

    socket.onopen = function(e) {
      socket.send(JSON.stringify({"type": "authorization", "token": "test123"}));
    }

    socket.onmessage = function(e) {
      if (contentType.includes('application/json')) {
        var notes = JSON.parse(e.data.toString());
        setPageData(notes);
      } else if (!contentType.includes('application/json') && !contentType.includes('text/plain')) { 
        const decoded = JSON.parse(e.data.toString());
        // const urlString = `data:${contentType};base64,${decoded.data}`;
        setPageData(decoded.data);
      }else {
        const decoded = JSON.parse(e.data.toString());
        const newData = atob(decoded.data);
        setPageData(newData);
      }
    }

    socket.onerror = function(e) {
      console.log('Socket error');
    }

    socket.onclose = function(e) {
      console.log('Socket closed');
    }
    setSocket(socket);


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
        <>
          <img className="w-full max-w-full p-0 m-0" src={imgString} alt={path} />
        </>
      )
  }

  if (typeof pageData == 'string' || pageData instanceof String) {
    if (!path.endsWith('.md')) {
      return ( 
        <section className="max-w-full w-full">
          <SyntaxHighlighter wrapLongLines={true} showLineNumbers={true}  language={lang} style={docco} children={pageData} />
        </section>
      )
    } else {
      return (
        <>
        <ReactMarkdown className="prose min-w-fit dark:prose-invert" children={pageData} remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={dark}
              language={match[1]}
              PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
              {children}
              </code>
            )
          },
            pre({ node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                />
              ) : (
                <pre {...props} className={className}>
                {children}
                </pre>
              )

            }
        }} />
        </>
      )
    }
  }


}

function createMarkup(data) {
  return {__html: data};
}
