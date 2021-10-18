import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/common/Header'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [session,loading] = useSession();
  const router = useRouter();
  useEffect(() => {
    session ? router.push('/products') : router.push('auth/signin')
  })
  return (
      <div>
        <Head>
          <title>Dangeun Clone Page</title>
          <meta name="description" content="Dangeun Clone Page" />
        </Head>
        <Header/>
        <main>

        </main>
      </div>
  )
}

export default Home
