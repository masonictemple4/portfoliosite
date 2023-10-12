import Link from 'next/link';

export default function MainNav() {


  return (
      <ul className="flex flex-wrap items-center justify-center mt-4">
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="/">home</Link></li>
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://github.com/masonictemple4" target="_blank">github</Link></li>
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://www.linkedin.com/in/mason-tucker-290b2b128/" target="_blank">linkedin</Link></li>
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href={'/resume'} target="_self">resume</Link></li>
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://twitter.com/masonictemple4" target="_blank">twitter</Link></li>
        <li className="mr-6"><Link className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="/blog">blog</Link></li>
      </ul>
  )
}
