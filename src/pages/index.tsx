import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/common/Header'
import { getSession } from 'next-auth/client'
import { redirect } from '../utils/routes'

const Home: NextPage = () => {
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

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  return session ? redirect('/products') : redirect("/auth/signin");
}
 
export default Home
