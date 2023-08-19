import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50 dark:bg-gray-900">
      <h1>Welcome &#128075; to my portfolio</h1>
      <div className="m-10">
        <Image className="rounded-full" src="/profilePicture.jpg" alt="Profile picture" width={100} height={100} />
     </div>
      <p className="max-w-lg">
        Mason is a senior software engineer with 6+ years of experience in high risk, fast paced start-up environments. Proven track record of developing and deploying web and mobile applications with a focus on scalability, reliability, and performance. Experienced in migrating databases, building backend services, developing microservices and web frameworks. Skilled in Golang, Python, Redis, gRPC, Websockets, postgreSQL, MySQL, Angular, Typescript and more.
      </p>
      <ul className="flex flex-wrap items-center justify-center mt-10">
        <li className="mr-6"><a className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://github.com/masonictemple4" target="_blank">github</a></li>
        <li className="mr-6"><a className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://www.linkedin.com/in/mason-tucker-290b2b128/" target="_blank">linkedin</a></li>
        <li className="mr-6"><a className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="" target="_blank">resume</a></li>
        <li className="mr-6"><a className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="https://twitter.com/masonictemple4" target="_blank">twitter</a></li>
        <li className="mr-6"><a className="text-link-blue hover:underline underline-offset-4 hover:font-bold" href="/blog">blog</a></li>
      </ul>
    </main>

  )
}
