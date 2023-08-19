'use client';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import MarkdownLayout from '@/pages/blog/layout';



export default function App({ Component, pageProps }) {
  const router = useRouter();


  if (router.pathname.startsWith('/blog')) {
    return (
      <MarkdownLayout>
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <Component {...pageProps} />
        </SessionProvider>
      </MarkdownLayout>
    )
  }  else {
    return (
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }



}
