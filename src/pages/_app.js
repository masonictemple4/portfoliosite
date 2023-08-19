'use client';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import MarkdownLayout from '@/pages/blog/layout';
import { useEffect, useState } from 'react';



export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const router = useRouter();


  if (router.pathname.startsWith('/blog')) {
       if (isClient) {
        return (
             <MarkdownLayout>
            <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
                <Component {...pageProps} />
            </SessionProvider>
          </MarkdownLayout>
        )
      } else {
        return (
          null
        )
      }
  }  else {
    if (isClient) {
      return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
          <Component {...pageProps} />
        </SessionProvider>
      )
    } else {
      return (
        null
      )
    }
  }



}
