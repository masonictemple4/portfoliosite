'use client';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import MarkdownLayout from '@/pages/blog/layout';
import { useEffect, useState } from 'react';
import MainLayout from './layout';



export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const router = useRouter();

  if (router.pathname.startsWith('/blog') || router.pathname.startsWith('/resume')) {
    const disableBreadcrumb = router.pathname.startsWith('/blog') ? false : true;
    const title = disableBreadcrumb ? 'The Ledger' : "The Software Engineer's Quarry";

       if (isClient) {
        return (
          <MainLayout>
            <MarkdownLayout diableBreadcrumbs={disableBreadcrumb} title={title}>
                <Component {...pageProps} />
            </MarkdownLayout>
          </MainLayout>
        )
      } else {
        return (
          null
        )
      }
  } else {
    if (isClient) {
      return (
        <MainLayout>
          <section className="container">
            <Component {...pageProps} />
          </section>
        </MainLayout>
      )
    } else {
      return (
        null
      )
    }
  }



}
