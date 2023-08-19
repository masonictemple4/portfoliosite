import  Link from 'next/link';


export default function Feed({ ...props  }) {
  const { notes } = props;
  if (!notes) {
    return (
      <>
      </>
    )
  }


   return (
         <ul role="list" className="flex flex-col items-center w-full">
           {notes.map((note) => {
             return (
               <li className="flex items-center justify-between rounded-md border border-gray-200 py-4 pl-4 pr-5 text-sm leading-6 mb-4 w-3/4 hover:ring hover:ring-sky-400 hover:ring-offset-emerald-600 hover:cursor-pointer hover:font-bold hover:text-lg" key={note.path}>
                 <div className="flex w-0 flex-1 items-center">
                   <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                   </svg>
                   <div className="ml-4 flex min-w-0 flex-1 gap-2">
                     <span className="truncate font-medium"><Link href={`/blog/detail?path=${note.path}`}>{note.name}</Link></span>
                     <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                   </div>
                 </div>
                 <div className="ml-4 flex-shrink-0[:not(:divide)]">
                   <Link className="font-medium text-link-blue" href={`/blog/detail?path=${note.path}`}>Open</Link>
                 </div>
               </li>
             )
           })}
         </ul>
 )

}
