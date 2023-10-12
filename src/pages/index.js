import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestimonialCard from '@/components/testimonialcard.component'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center py-8 bg-gray-50 dark:bg-gray-900">
      <h1>Welcome &#128075; to my portfolio</h1>
      <div className="flex flex-col items-center mt-4">
        <Image className="rounded-full" src="/profilePicture.jpg" alt="Profile picture" width={100} height={100} />

     </div>
    {/*Mason is a senior software engineer with 6+ years of experience in high risk, fast paced start-up environments. Proven track record of developing and deploying web and mobile applications with a focus on scalability, reliability, and performance. Experienced in migrating databases, building backend services, developing microservices and web frameworks. Skilled in Golang, Python, Redis, gRPC, Websockets, postgreSQL, MySQL, Angular, Typescript and more. */}
    <p className="max-w-lg mt-3">
    With over 7 years of experience in high risk, fast paced start-up environments. Proven track record of developing and deploying backend systems and  applications with a focus on scalability, reliability, and performance. See below for more skills and projects from Mason.
    </p>
    <TestimonialCard body={'Mason is an incredible back-end Software Engineer with an unmatched passion for coding, and skills to match! Mason is equally comfortable in macro and micro perspectives, having the rare ability to design and build entire systems, while continuously expanding upon the overall vision, as well as refining the technical foundations necessary to make it all function. At Listella he turned ideas into products, at every level. He strives to be an incredible teammate, and always available to help guide fellow engineers to reach their potential.'} profilepic={'https://storage.googleapis.com/masonictemple4-pub/testimonials/markmckelvie.jpeg'} name={'Mark Mckelvie'} position={'Senior iOS Engineer Listella'} />
    </main>

  )
}
