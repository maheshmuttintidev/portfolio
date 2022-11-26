import SkillsItemsList from '../components/SkillsItemsList'
import * as React from 'react'
import { getMyPortfolioContent } from 'services'
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // This value is considered fresh for ten seconds (s-maxage=10).
  // If a request is repeated within the next 10 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response: any = await getMyPortfolioContent()

  return {
    props: { response },
  }
}

const deepGet = (obj: Object, keys: Array<any>) =>
  keys.reduce(
    (xs: Object, x) =>
      xs &&
      xs[x as keyof Object] !== null &&
      xs[x as keyof Object] !== undefined
        ? xs[x as keyof Object]
        : null,
    obj
  )!

export default function Web({ response }): React.ReactElement {
  console.log('response', response)

  const AboutMeDescription = deepGet(response?.results[0], [
    'heading_2',
    'rich_text',
    0,
    'plain_text',
  ])

  return (
    <>
      <main className="content">
        <div className="container">
          <h1
            className="pt-5"
            style={{ paddingLeft: 0, borderBottom: '7px solid lime' }}
          >
            Mahesh Muttinti Dev
          </h1>

          <h2 style={{ marginTop: 24, marginBottom: 24, fontSize: 32 }}>
            About Me:
          </h2>
          <p style={{ lineHeight: 2, marginBottom: 24 }}>
            {AboutMeDescription}
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3>Mobile: +919603757304</h3>
            <h3>Twitter: MMuttinti</h3>
            <h3>Instagram: maheshmuttinti</h3>
          </div>
          <h2 style={{ marginBottom: 24, fontSize: 32 }}>Skills:</h2>
          <SkillsItemsList />
        </div>
      </main>

      <footer
        className="container justify-center flex"
        style={{ zIndex: 10, marginTop: 60, paddingBottom: 14 }}
      >
        <p>Developed by Mahesh Muttinti</p>
      </footer>
    </>
  )
}
