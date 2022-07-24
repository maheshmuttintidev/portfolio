import SkillsItemsList from '../components/SkillsItemsList'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { getPortfolio as getPortfolioData } from 'services'

export default function Web(): React.ReactElement {
  const [portfolio, setPortfolio] = useState<null | undefined | object>(null)
  const getPortfolio = useRef(() => {})

  getPortfolio.current = async () => {
    try {
      const response: any = await getPortfolioData()
      if (response) {
        console.log('final response of portfolio', response)
        setPortfolio(response)
      }
      setPortfolio({ cool: 'red' })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log('portfolio', portfolio)
  }, [portfolio])

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
          <div
            style={{
              zIndex: 100,
              marginBottom: 24,
              marginTop: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <button onClick={() => getPortfolio.current()}>Get Posts</button>
            <pre>{JSON.stringify(portfolio)}</pre>
          </div>
          <h2 style={{ marginBottom: 24, fontSize: 32 }}>About Me:</h2>
          <p style={{ lineHeight: 2, marginBottom: 24 }}>
            My Name is Mahesh Muttinti. I am a full stack developer. I have 1
            year of experience in React JS, React Native, Node JS. I am working
            on Mainly Website development, Mobile App development for now. If
            you require any help from my side either website development and
            mobile app development. Please contact me.
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3>Mobile: +919603757305</h3>
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
