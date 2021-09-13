import type { NextPage } from 'next'
import Head from 'next/head'
import Title from '../components/title'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dangeun Clone Page</title>
        <meta name="description" content="Dangeun Clone Page" />
      </Head>
      <Title/>
    </div>
  )
}

export default Home
