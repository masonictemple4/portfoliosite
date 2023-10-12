import  Link from 'next/link';
import { useRouter } from 'next/router';


export default function BlogCard({ blog }) {

  const router = useRouter();



  if (blog) {
    return (
   <li className="flex items-center justify-between rounded-md border border-gray-200 py-4 pl-4 pr-5 text-sm leading-6 mb-4 w-full hover:ring hover:ring-sky-400 hover:ring-offset-emerald-600 hover:cursor-pointer hover:text-lg flex-wrap" onClick={() => handleClick(blog)}>
     <div className="flex w-0 flex-1 items-center">
       <div className="ml-4 flex flex-col min-w-0 flex-1 gap-2">
         <h1 className="text-center text-xl font-large font-extrabold"><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h1>
         <span className="">{blog.description}</span>
         <strong className="truncate"><Link href={`/blog/${blog.slug}`}>{blog.slug + '.md'}</Link></strong>
    <div className="flex flex-row flex-wrap justify-between">
      <span className="text-gray-400 text-left">
      {blog.createdat
        ? new Date(blog.createdat).toLocaleDateString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        : blog.createdat
      }
      </span>
      <span className="flex-wrap text-gray-400 text-right">{blog.tags.map((t) => t.name).join(", ")}</span>
    </div>
       </div>
     </div>
   </li>

  )
  }


  function handleClick(blog) {
    router.push(`/blog/${blog.slug}`)
  }
}

// GRAVEYARD
/*
<svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
     <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
     </svg>
*/

