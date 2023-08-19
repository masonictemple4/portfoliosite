import  { PageHeader }  from '@/components/pageheader.component';
import  Link from 'next/link';
import { useEffect } from 'react';


export default function Feed({ ...props  }) {
  const { notes, path } = props;
  if (!notes) {
    return (
      <section className={"bg-gray-50 dark:bg-gray-900"}>
         <PageHeader plainText={''} gradientText={"The Software Engineer's Quarry"} breadcrumbs={path} />
      </section>
    )
  }


  // <span className="truncate font-medium"><Link href={`${pathname}/${note.path}?content_type=${note.content_type}`}>{note.name}</Link></span>
   return (
     <main className="flex min-h-screen flex-col items-center p-8 gray-50 dark:bg-gray-900 h-full min-h-full">
       <section className={""}>
         <PageHeader plainText={''} gradientText={"The Software Engineer's Quarry"} breadcrumbs={path} />
         <ul role="list" className="flex flex-col items-center">
           {notes.map((note) => {
             return (
               <li className="flex items-center justify-between rounded-md border border-gray-200 py-4 pl-4 pr-5 text-sm leading-6 mb-4 w-1/2 hover:ring hover:ring-sky-400 hover:ring-offset-emerald-600 hover:cursor-pointer hover:font-bold hover:text-lg" key={note.path}>
                 <div className="flex w-0 flex-1 items-center">
                   <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                   </svg>
                   <div className="ml-4 flex min-w-0 flex-1 gap-2">
                     <span className="truncate font-medium"><Link href={`/markdown/detail?path=${note.path}`}>{note.name}</Link></span>
                     <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                   </div>
                 </div>
                 <div className="ml-4 flex-shrink-0[:not(:divide)]">
                   <Link className="font-medium text-link-blue" href={`/markdown/detail?path=${note.path}`}>Open</Link>
                 </div>
               </li>
             )
           })}
         </ul>
       </section>
     </main>
 )

}
