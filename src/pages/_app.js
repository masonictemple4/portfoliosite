import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import MarkdownLayout from '@/pages/markdown/layout';



export default function App({ Component, pageProps }) {
  const router = useRouter();


  if (router.pathname.startsWith('/markdown')) {
    return (
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <MarkdownLayout>
          <Component {...pageProps} />
        </MarkdownLayout>
      </SessionProvider>
    )
  }  else {
    return (
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
      </SessionProvider>
    )
  }



}
