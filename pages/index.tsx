import Head from 'next/head'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clipspace flow</title>
      </Head>
      <HomeContent />
    </>
  )
}
