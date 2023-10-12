import Image from 'next/image'

export default function TestimonialCard({ body, profilepic, name, position }) {



  return (
      <div class="max-w-lg px-4 mx-auto text-center py-4 px-2">
      <figure class="max-w-lg mx-auto">
    {/*<svg class="h-3 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg>*/}
          <blockquote>
              <p class="text-gray-900 dark:text-white">&quot;{body}&quot;</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <Image class="w-6 h-6 rounded-full" src={profilepic} alt="profile picture" width={"40"} height={"40"}/>
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">{name}</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{position}</div>
              </div>
          </figcaption>
      </figure>
  </div>
  )
}
